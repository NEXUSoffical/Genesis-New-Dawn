import * as THREE from 'three';
import { BlockyAvatar } from './BlockyAvatar';
import { RobloxHUD, HotbarTool } from './RobloxHUD';
import { AvatarCustomization } from './types';
import { MultiplayerManager } from './MultiplayerManager';
import { VoxelWorld, VoxelType, VOXEL_SIZE, RaycastHitResult } from './VoxelWorld';
import { VoxelAudio } from './VoxelAudio';
import { VoxelParticles } from './VoxelParticles';
import { DayNightCycle } from './DayNightCycle';
import { MapData, ScriptedEntity } from './MapTypes';
import { MapManager } from './MapManager';
import { ScriptingEngine, ScriptPlayerAPI, ScriptWorldAPI } from './ScriptingEngine';
import { ScriptInspectorModal } from './ScriptInspectorModal';

interface CoinPickup {
  mesh: THREE.Mesh;
  baseY: number;
  isCollected: boolean;
}

interface InteractiveBlock {
  mesh: THREE.Mesh;
  type: 'tree' | 'block' | 'obby';
}

export class GameEngine3D {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private hud: RobloxHUD;
  private multiplayer: MultiplayerManager;

  // Voxel & Environment Systems
  private voxelWorld!: VoxelWorld;
  private voxelAudio: VoxelAudio = new VoxelAudio();
  private voxelParticles!: VoxelParticles;
  private dayNight!: DayNightCycle;
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private currentTarget: RaycastHitResult = {
    hit: false,
    voxelPos: new THREE.Vector3(),
    adjacentPos: new THREE.Vector3()
  };
  private isFirstPerson: boolean = false;
  private sunLight!: THREE.DirectionalLight;
  private ambientLight!: THREE.AmbientLight;
  private footstepTimer: number = 0;

  // Player
  private playerAvatar: BlockyAvatar;
  private playerPos: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private playerVelocityY: number = 0;
  private isGrounded: boolean = true;
  private playerSpeed: number = 10;
  private playerHealth: number = 100;
  private isMoving: boolean = false;
  private isJumping: boolean = false;

  // Camera Orbit
  private cameraDistance: number = 8.5;
  private cameraPitch: number = 0.35; // Vertical angle
  private cameraYaw: number = 0; // Horizontal angle
  private isMouseDown: boolean = false;
  private prevMousePos: { x: number; y: number } = { x: 0, y: 0 };

  // Keys
  private keys: { [key: string]: boolean } = {};

  // NPCs & Scripted Entities
  private adamAvatar: BlockyAvatar;
  private eveAvatar: BlockyAvatar;
  private adamPos: THREE.Vector3 = new THREE.Vector3(14, 0, -8);
  private evePos: THREE.Vector3 = new THREE.Vector3(8, 0, 4);
  private scriptingEngine: ScriptingEngine;
  private scriptedEntities: Map<string, {
    entity: ScriptedEntity;
    mesh: THREE.Object3D;
    avatar: BlockyAvatar | null;
  }> = new Map();
  private inspectorModal: ScriptInspectorModal | null = null;

  // Interactive items & world objects
  private coins: CoinPickup[] = [];
  private interactiveBlocks: InteractiveBlock[] = [];
  private spinnerObstacle: THREE.Mesh | null = null;
  private campfireLight: THREE.PointLight | null = null;

  // Loop & audio
  // Loop & audio
  private animId: number = 0;
  private lastTime: number = 0;
  private equippedTool: HotbarTool | null = null;
  private onExitCallback?: () => void;

  // Obby & Studio Mode state
  private activeMap: MapData | null = null;
  private activeCheckpoint: THREE.Vector3 = new THREE.Vector3(0, 4, 0);
  private isStudioMode: boolean = false;
  private isFlyMode: boolean = false;
  private speedBoostTimer: number = 0;
  private hasReachedFinish: boolean = false;

  constructor(
    container: HTMLElement,
    customization: AvatarCustomization,
    username: string = 'Pioneer',
    onExit?: () => void,
    initialMap?: MapData | null,
    startInStudio: boolean = false
  ) {
    this.container = container;
    this.onExitCallback = onExit;

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'rbx-3d-canvas';
    this.container.appendChild(this.canvas);

    // Initialize Three.js Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb); // Classic sky blue
    // Fog disabled so platforms and character are always 100% visible and crisp

    // Classic Studio & Obby reference floor grid (provides continuous spatial orientation)
    const studioGrid = new THREE.GridHelper(300, 60, 0x0284c7, 0x334155);
    studioGrid.position.y = -6;
    this.scene.add(studioGrid);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = false; // Fast, robust WebGL rendering without shadow acne or shader discard

    // HUD
    this.hud = new RobloxHUD(this.container);
    this.setupHUDCallbacks();

    // Initialize Realtime Multiplayer
    this.multiplayer = new MultiplayerManager(this.scene, username, customization);
    this.setupMultiplayerCallbacks();

    // Lighting
    this.setupLighting();

    // Day / Night Cycle
    this.dayNight = new DayNightCycle(this.scene, this.sunLight, this.ambientLight, this.voxelAudio);
    this.dayNight.onTimeChange = (timeStr, isNight) => {
      this.hud.setTime(timeStr, isNight);
    };

    // Voxel World & Particles
    this.voxelWorld = new VoxelWorld(this.scene);
    this.voxelParticles = new VoxelParticles(this.scene);

    // Build World or Load Map
    if (initialMap) {
      this.loadCustomMap(initialMap);
    } else {
      this.buildWorld();
      const startY = this.getGroundY(0, 0);
      this.playerPos.set(0, startY, 0);
      this.activeCheckpoint.set(0, startY, 0);
    }

    if (startInStudio) {
      this.setStudioMode(true);
    }

    // Spawn Player Avatar on ground
    this.playerAvatar = new BlockyAvatar(customization, username);
    this.playerAvatar.setLocalPlayer(true); // Hide local player overhead tag so it does not block third-person view
    this.playerAvatar.root.position.copy(this.playerPos);
    this.scene.add(this.playerAvatar.root);

    // Spawn NPCs (Adam & Eve)
    this.adamAvatar = new BlockyAvatar(
      {
        headColor: '#facc15',
        torsoColor: '#16a34a',
        leftArmColor: '#facc15',
        rightArmColor: '#facc15',
        leftLegColor: '#78350f',
        rightLegColor: '#78350f',
        equippedHat: 'none',
        equippedShirt: 'flannel',
        equippedPants: 'cargo_shorts',
        equippedFace: 'smile',
        equippedGear: 'axe'
      },
      'Adam (Founder)'
    );
    this.adamAvatar.root.position.copy(this.adamPos);
    this.scene.add(this.adamAvatar.root);

    this.eveAvatar = new BlockyAvatar(
      {
        headColor: '#fdba74',
        torsoColor: '#ec4899',
        leftArmColor: '#fdba74',
        rightArmColor: '#fdba74',
        leftLegColor: '#0284c7',
        rightLegColor: '#0284c7',
        equippedHat: 'halo',
        equippedShirt: 'genesis_hoodie',
        equippedPants: 'blue_jeans',
        equippedFace: 'chill',
        equippedGear: 'none'
      },
      'Eve (Founder)'
    );
    this.eveAvatar.root.position.copy(this.evePos);
    this.scene.add(this.eveAvatar.root);

    // Initialize Scripting & Entity Engine
    this.scriptingEngine = new ScriptingEngine(this.scene, this.voxelAudio);

    // Register Adam and Eve as interactive scripted NPCs
    this.adamAvatar.root.userData = { entityId: 'npc_adam' };
    this.adamAvatar.torsoMesh.userData = { entityId: 'npc_adam' };
    this.scriptedEntities.set('npc_adam', {
      entity: {
        id: 'npc_adam',
        name: 'Adam (Founder)',
        type: 'npc',
        position: { x: this.adamPos.x, y: this.adamPos.y, z: this.adamPos.z },
        script: {
          behavior: 'dialogue',
          dialogueText: 'Welcome to Genesis! Use Studio mode (TAB) to build anything and attach custom code!'
        }
      },
      mesh: this.adamAvatar.root,
      avatar: this.adamAvatar
    });

    this.eveAvatar.root.userData = { entityId: 'npc_eve' };
    this.eveAvatar.torsoMesh.userData = { entityId: 'npc_eve' };
    this.scriptedEntities.set('npc_eve', {
      entity: {
        id: 'npc_eve',
        name: 'Eve (Founder)',
        type: 'npc',
        position: { x: this.evePos.x, y: this.evePos.y, z: this.evePos.z },
        script: {
          behavior: 'dialogue',
          dialogueText: 'You can create your own NPCs, items, and script their behavior just like Roblox!'
        }
      },
      mesh: this.eveAvatar.root,
      avatar: this.eveAvatar
    });

    // Controls
    this.setupInputEvents();

    // Start Engine Loop
    this.lastTime = performance.now();
    this.animate(this.lastTime);
  }

  private setupLighting(): void {
    // Ambient light - bright and clear
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(this.ambientLight);

    // Sunlight - warm directional key light
    this.sunLight = new THREE.DirectionalLight(0xfffaed, 1.4);
    this.sunLight.position.set(40, 70, 30);
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // Hemispheric light for ambient bounce
    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x228b22, 0.5);
    this.scene.add(hemiLight);
  }

  private buildWorld(): void {
    // 1. Classic Studded Green Baseplate (200 x 200)
    const baseplateGeo = new THREE.BoxGeometry(200, 4, 200);
    const studTexture = this.generateStudTexture();
    studTexture.wrapS = THREE.RepeatWrapping;
    studTexture.wrapT = THREE.RepeatWrapping;
    studTexture.repeat.set(50, 50);

    const baseplateMat = new THREE.MeshLambertMaterial({
      color: 0x388e3c,
      map: studTexture
    });
    const baseplate = new THREE.Mesh(baseplateGeo, baseplateMat);
    baseplate.position.y = -2;
    baseplate.receiveShadow = true;
    this.scene.add(baseplate);

    // 2. Decorative Spawn Pad (Classic grey block with spawn logo)
    const spawnPad = new THREE.Mesh(
      new THREE.CylinderGeometry(4, 4, 0.2, 32),
      new THREE.MeshLambertMaterial({ color: 0x94a3b8 })
    );
    spawnPad.position.set(0, 0.1, 0);
    spawnPad.receiveShadow = true;
    this.scene.add(spawnPad);

    // 3. Pioneer Wood Cabin
    this.buildCabin(16, 0, -12);

    // 4. Campfire with warm point light
    this.buildCampfire(6, 0, 2);

    // 5. Procedural Voxel Pine Trees
    const treePositions = [
      [-12, -15], [-20, -8], [-15, 12], [-22, 20],
      [14, -25], [24, -18], [20, 16], [28, 6],
      [-8, 26], [8, 28]
    ];
    treePositions.forEach(([x, z]) => this.buildTree(x, 0, z));

    // 6. Interactive OBBY (Obstacle Course) Section!
    this.buildObbyCourse(-30, 0, -5);

    // 7. Collectible Spinning Genesis Coins
    const coinCoords = [
      [0, 1.5, -6], [6, 1.5, -10], [-6, 1.5, -6],
      [-30, 3, -5], [-30, 5, -12], [-30, 7, -19], [-30, 9, -26],
      [16, 1.5, 6], [20, 1.5, 12], [0, 1.5, 16]
    ];
    coinCoords.forEach(([x, y, z]) => this.spawnCoin(x, y, z));
  }

  private generateStudTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // Base green
    ctx.fillStyle = '#388e3c';
    ctx.fillRect(0, 0, 64, 64);

    // Darker stud ring
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath();
    ctx.arc(32, 32, 14, 0, Math.PI * 2);
    ctx.fill();

    // Stud highlight
    ctx.fillStyle = '#4caf50';
    ctx.beginPath();
    ctx.arc(30, 30, 12, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }

  private buildTree(x: number, y: number, z: number): void {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, y, z);

    // Trunk
    const trunk = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 5, 1.6),
      new THREE.MeshLambertMaterial({ color: 0x78350f })
    );
    trunk.position.y = 2.5;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    treeGroup.add(trunk);

    // Foliage Tier 1
    const fol1 = new THREE.Mesh(
      new THREE.BoxGeometry(6, 2.5, 6),
      new THREE.MeshLambertMaterial({ color: 0x15803d })
    );
    fol1.position.y = 5.5;
    fol1.castShadow = true;
    treeGroup.add(fol1);

    // Foliage Tier 2
    const fol2 = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 2.2, 4.5),
      new THREE.MeshLambertMaterial({ color: 0x16a34a })
    );
    fol2.position.y = 7.5;
    fol2.castShadow = true;
    treeGroup.add(fol2);

    // Foliage Tier 3 (Crown)
    const fol3 = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 2, 2.5),
      new THREE.MeshLambertMaterial({ color: 0x22c55e })
    );
    fol3.position.y = 9.2;
    fol3.castShadow = true;
    treeGroup.add(fol3);

    this.scene.add(treeGroup);
    this.interactiveBlocks.push({ mesh: trunk, type: 'tree' });
  }

  private buildCabin(x: number, y: number, z: number): void {
    const cabin = new THREE.Group();
    cabin.position.set(x, y, z);

    // Walls
    const walls = new THREE.Mesh(
      new THREE.BoxGeometry(10, 6, 8),
      new THREE.MeshLambertMaterial({ color: 0x854d0e })
    );
    walls.position.y = 3;
    walls.castShadow = true;
    walls.receiveShadow = true;
    cabin.add(walls);

    // Roof
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(8, 3.5, 4),
      new THREE.MeshLambertMaterial({ color: 0x451a03 })
    );
    roof.position.y = 7.5;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    cabin.add(roof);

    // Door
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(2, 3.5, 0.2),
      new THREE.MeshLambertMaterial({ color: 0x1e293b })
    );
    door.position.set(0, 1.75, 4.05);
    cabin.add(door);

    this.scene.add(cabin);
  }

  private buildCampfire(x: number, y: number, z: number): void {
    const fireGroup = new THREE.Group();
    fireGroup.position.set(x, y, z);

    // Stone ring
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const stone = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.5, 0.8),
        new THREE.MeshLambertMaterial({ color: 0x64748b })
      );
      stone.position.set(Math.cos(angle) * 1.5, 0.25, Math.sin(angle) * 1.5);
      fireGroup.add(stone);
    }

    // Fire logs
    const log1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 1.8, 8),
      new THREE.MeshLambertMaterial({ color: 0x78350f })
    );
    log1.rotation.x = Math.PI / 3;
    log1.position.y = 0.5;
    const log2 = log1.clone();
    log2.rotation.z = Math.PI / 3;

    // Glowing flame core
    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.7, 1.4, 8),
      new THREE.MeshBasicMaterial({ color: 0xf97316 })
    );
    flame.position.y = 0.8;
    fireGroup.add(log1, log2, flame);

    // Flickering Point Light
    this.campfireLight = new THREE.PointLight(0xff7700, 3, 18);
    this.campfireLight.position.set(0, 1.5, 0);
    fireGroup.add(this.campfireLight);

    this.scene.add(fireGroup);
  }

  private buildObbyCourse(startX: number, startY: number, startZ: number): void {
    const obbyGroup = new THREE.Group();

    // Ancient Runic Monolith Marker
    const monolith = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 6, 1.4),
      new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.7,
        emissive: 0x0284c7,
        emissiveIntensity: 0.25
      })
    );
    monolith.position.set(startX, startY + 3, startZ + 4);
    monolith.castShadow = true;
    obbyGroup.add(monolith);

    // Floating Ancient Runic Stepping Platforms
    const platformColors = [0x334155, 0x1e293b, 0x334155, 0x1e293b, 0x334155, 0x0f172a];
    for (let i = 0; i < 6; i++) {
      const step = new THREE.Mesh(
        new THREE.BoxGeometry(3.6, 0.7, 3.6),
        new THREE.MeshStandardMaterial({
          color: platformColors[i],
          roughness: 0.6,
          emissive: 0x38bdf8,
          emissiveIntensity: 0.2
        })
      );
      step.position.set(startX, startY + (i + 1) * 2.2, startZ - i * 6);
      step.receiveShadow = true;
      obbyGroup.add(step);
    }

    // Sacred Sanctuary Summit
    const topPlatform = new THREE.Mesh(
      new THREE.CylinderGeometry(5, 5.5, 1, 32),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 })
    );
    topPlatform.position.set(startX, 15, startZ - 36);
    topPlatform.receiveShadow = true;
    obbyGroup.add(topPlatform);

    this.spinnerObstacle = new THREE.Mesh(
      new THREE.BoxGeometry(8, 0.5, 0.5),
      new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.5
      })
    );
    this.spinnerObstacle.position.set(startX, 16, startZ - 36);
    obbyGroup.add(this.spinnerObstacle);

    // Ancestral Starlight Beacon
    const beacon = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.8,
        roughness: 0.1
      })
    );
    beacon.position.set(startX, 17.5, startZ - 36);
    beacon.rotation.y = Math.PI / 4;
    obbyGroup.add(beacon);

    this.scene.add(obbyGroup);
  }

  private spawnCoin(x: number, y: number, z: number): void {
    const coinMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 0.7, 0.15, 16),
      new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        metalness: 0.9,
        roughness: 0.2,
        emissive: 0xd97706,
        emissiveIntensity: 0.3
      })
    );
    coinMesh.rotation.x = Math.PI / 2;
    coinMesh.position.set(x, y, z);
    coinMesh.castShadow = true;
    this.scene.add(coinMesh);

    this.coins.push({
      mesh: coinMesh,
      baseY: y,
      isCollected: false
    });
  }

  private setupHUDCallbacks(): void {
    this.hud.onToolEquipped = (tool) => {
      this.equippedTool = tool;
      if (tool) {
        this.playerAvatar.applyGear(tool.id);
        this.playerSpeed = tool.id === 'speed_coil' ? 22 : 10;
      } else {
        this.playerAvatar.applyGear('none');
        this.playerSpeed = 10;
      }
    };

    this.hud.onLeaveGame = () => {
      this.destroy();
      if (this.onExitCallback) this.onExitCallback();
    };

    this.hud.onToggleStudioMode = (active) => this.setStudioMode(active);
    this.hud.onToggleFlyMode = () => {
      this.isFlyMode = !this.isFlyMode;
      this.hud.setFlyStatus(this.isFlyMode);
    };
    this.hud.onSaveMap = () => this.openSaveMapModal();
    this.hud.onPublishMap = () => this.openPublishMapModal();
    this.hud.onLoadMap = () => this.openLoadMapModal();
    this.hud.onSpawnNPC = () => this.spawnScriptedNPC();
    this.hud.onSpawnItem = () => this.spawnScriptedItem();
    this.hud.onOpenInspector = () => this.openScriptInspector();
  }

  private setupMultiplayerCallbacks(): void {
    this.multiplayer.onPlayerCountChange = (count) => {
      this.hud.setPlayerCount(count);
    };

    this.multiplayer.onRemoteBlockPlaced = (payload) => {
      this.voxelWorld.setBlock(payload.vx, payload.vy, payload.vz, payload.type as VoxelType);
      this.voxelAudio.playBlockPlace(payload.type);
    };

    this.multiplayer.onRemoteBlockBroken = (payload) => {
      this.voxelWorld.removeBlock(payload.vx, payload.vy, payload.vz);
      const worldPos = this.voxelWorld.voxelToWorld(payload.vx, payload.vy, payload.vz);
      this.voxelParticles.spawnBreakBurst(worldPos, payload.color);
      this.voxelAudio.playBlockBreak();
    };

    this.multiplayer.onRemoteChat = (payload) => {
      this.hud.addChatMessage(payload.username, payload.text, '#a855f7');
    };

    this.hud.onChatSent = (text) => {
      this.hud.addChatMessage('You', text, '#38bdf8');
      this.multiplayer.broadcastChat(text);
    };
  }

  public getGroundY(x: number, z: number): number {
    const vx = Math.round(x / VOXEL_SIZE);
    const vz = Math.round(z / VOXEL_SIZE);
    for (let vy = 12; vy >= -3; vy--) {
      if (this.voxelWorld && this.voxelWorld.getBlock(vx, vy, vz)) {
        return (vy + 1) * VOXEL_SIZE;
      }
    }
    return 0; // Baseplate floor fallback
  }

  private setupInputEvents(): void {
    // Keyboard
    window.addEventListener('keydown', (e) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'TEXTAREA') {
        return;
      }

      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) {
        e.preventDefault();
      }

      this.keys[e.code] = true;
      if (e.code === 'Space' && this.isGrounded) {
        this.playerVelocityY = 14; // Jump force
        this.isGrounded = false;
        this.voxelAudio.playSwing();
      }
      // V key toggles First-Person / Third-Person camera
      if (e.code === 'KeyV') {
        this.isFirstPerson = !this.isFirstPerson;
        this.cameraDistance = this.isFirstPerson ? 0.5 : 9;
        this.playerAvatar.setFirstPerson(this.isFirstPerson);
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    // Prevent default right click menu for block placement
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    // Mouse clicks: Left Click = Mine / Swing / Interact, Right Click = Place Block
    this.canvas.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.prevMousePos = { x: e.clientX, y: e.clientY };

      if (e.button === 0) {
        // Check if an entity (NPC or scripted item) was clicked
        if (this.handleEntityClick(e.clientX, e.clientY)) {
          this.playerAvatar.triggerToolSwing();
          return;
        }
        this.playerAvatar.triggerToolSwing();
        this.handleMineAction();
      } else if (e.button === 2) {
        this.playerAvatar.triggerToolSwing();
        this.handlePlaceAction();
      }
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isMouseDown) return;
      const deltaX = e.clientX - this.prevMousePos.x;
      const deltaY = e.clientY - this.prevMousePos.y;

      this.cameraYaw -= deltaX * 0.005;
      // Clamp pitch between 0.1 (elevated behind) and 1.15 (looking down at character), avoiding underground angles
      this.cameraPitch = Math.max(0.1, Math.min(1.15, this.cameraPitch + deltaY * 0.005));

      this.prevMousePos = { x: e.clientX, y: e.clientY };
    });

    // Zoom in/out without auto-triggering first person (First person toggled via V key)
    this.canvas.addEventListener('wheel', (e) => {
      this.cameraDistance = Math.max(3.0, Math.min(25, this.cameraDistance + e.deltaY * 0.01));
    });

    // Resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  private handleMineAction(): void {
    if (!this.isStudioMode) {
      // In Play Mode (Obby), clicking swings weapon/tool, but never breaks blocks so players cannot destroy maps
      this.voxelAudio.playSwing();
      return;
    }

    if (this.currentTarget.hit) {
      const { x, y, z } = this.currentTarget.voxelPos;
      const removed = this.voxelWorld.removeBlock(x, y, z);
      if (removed) {
        const worldPos = this.voxelWorld.voxelToWorld(x, y, z);
        this.voxelParticles.spawnBreakBurst(worldPos, removed.color);
        this.voxelAudio.playBlockBreak(removed.type);
        if (this.equippedTool?.id === 'pickaxe') {
          this.voxelAudio.playPickaxeClink();
        }
        this.multiplayer.broadcastBlockBroken(x, y, z, removed.color);
      }
    } else {
      this.voxelAudio.playSwing();
    }
  }

  private handlePlaceAction(): void {
    if (!this.equippedTool) return;

    if (this.currentTarget.hit && this.equippedTool.id.startsWith('block_')) {
      const blockType = this.equippedTool.id.replace('block_', '') as VoxelType;
      const adj = this.currentTarget.adjacentPos;

      // Player collision check: don't place inside player avatar volume
      const playerVx = Math.round(this.playerPos.x / VOXEL_SIZE);
      const playerVy = Math.floor(this.playerPos.y / VOXEL_SIZE);
      const playerVz = Math.round(this.playerPos.z / VOXEL_SIZE);

      if (
        adj.x === playerVx &&
        (adj.y === playerVy || adj.y === playerVy + 1 || adj.y === playerVy + 2) &&
        adj.z === playerVz
      ) {
        return; // Collides with player!
      }

      this.voxelWorld.setBlock(adj.x, adj.y, adj.z, blockType);
      this.voxelAudio.playBlockPlace(blockType);
      const col = this.voxelWorld.getBlockColor(blockType);
      this.multiplayer.broadcastBlockPlaced(adj.x, adj.y, adj.z, blockType, col);
    }
  }

  private updateMovement(deltaSec: number): void {
    // Roblox Camera Rotation with Left & Right Arrow keys
    const camRotateSpeed = 2.6; // Radians per sec
    if (this.keys['ArrowLeft']) {
      this.cameraYaw += camRotateSpeed * deltaSec;
    }
    if (this.keys['ArrowRight']) {
      this.cameraYaw -= camRotateSpeed * deltaSec;
    }

    // WASD Character Movement (and optional Up/Down Arrow for forward/back)
    const moveDir = new THREE.Vector3(0, 0, 0);

    if (this.keys['KeyW'] || this.keys['ArrowUp']) moveDir.z -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) moveDir.z += 1;
    if (this.keys['KeyA']) moveDir.x -= 1;
    if (this.keys['KeyD']) moveDir.x += 1;

    this.isMoving = moveDir.lengthSq() > 0;

    if (this.isMoving) {
      moveDir.normalize();
      // Rotate move direction according to camera horizontal yaw
      moveDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.cameraYaw);

      this.playerPos.x += moveDir.x * this.playerSpeed * deltaSec;
      this.playerPos.z += moveDir.z * this.playerSpeed * deltaSec;

      // Face movement direction
      const targetAngle = Math.atan2(moveDir.x, moveDir.z);
      this.playerAvatar.root.rotation.y = targetAngle;

      // Footstep sound
      if (this.isGrounded) {
        this.footstepTimer += deltaSec;
        if (this.footstepTimer > 0.32) {
          this.footstepTimer = 0;
          this.voxelAudio.playFootstep();
        }
      }
    }

    // Fly Mode or Gravity & Ground collision
    if (this.isFlyMode) {
      if (this.keys['Space']) this.playerPos.y += 18 * deltaSec;
      if (this.keys['ShiftLeft'] || this.keys['ShiftRight']) this.playerPos.y -= 18 * deltaSec;
      this.playerVelocityY = 0;
      this.isGrounded = false;
    } else {
      this.playerVelocityY -= 32 * deltaSec; // Gravity
      this.playerPos.y += this.playerVelocityY * deltaSec;

      const groundY = this.getGroundY(this.playerPos.x, this.playerPos.z);
      if (this.playerPos.y <= groundY) {
        this.playerPos.y = groundY;
        this.playerVelocityY = 0;
        this.isGrounded = true;
      }
    }

    this.isJumping = !this.isGrounded;

    // Speed boost timer
    if (this.speedBoostTimer > 0) {
      this.speedBoostTimer -= deltaSec;
      if (this.speedBoostTimer <= 0) {
        this.playerSpeed = 10;
      }
    }

    // Obby Interactive Block & Hazard Triggers
    if (!this.isStudioMode) {
      const vx = Math.round(this.playerPos.x / VOXEL_SIZE);
      const vz = Math.round(this.playerPos.z / VOXEL_SIZE);
      const vy = Math.floor((this.playerPos.y + 0.1) / VOXEL_SIZE);
      const currentBlock = this.voxelWorld.getBlock(vx, vy, vz) || this.voxelWorld.getBlock(vx, vy - 1, vz);

      if (currentBlock) {
        if (currentBlock.type === 'lava') {
          this.voxelAudio.playLavaSizzle();
          this.voxelParticles.spawnBreakBurst(this.playerPos, 0xff3b00);
          this.respawnAtCheckpoint('🔥 Sizzled by Lava! Respawning...');
        } else if (currentBlock.type === 'bounce_pad') {
          this.playerVelocityY = 28;
          this.isGrounded = false;
          this.voxelAudio.playBounce();
          this.voxelParticles.spawnBreakBurst(this.playerPos, 0x4ade80);
          this.hud.showToast('🚀 Super Jump Launch!');
        } else if (currentBlock.type === 'speed_pad') {
          this.speedBoostTimer = 2.5;
          this.playerSpeed = 24;
          this.voxelAudio.playSwing();
          this.hud.showToast('⚡ Hyper Speed Boost!');
        } else if (currentBlock.type === 'checkpoint') {
          if (this.activeCheckpoint.distanceTo(this.playerPos) > 4) {
            this.activeCheckpoint.set(this.playerPos.x, this.playerPos.y + 0.5, this.playerPos.z);
            this.voxelAudio.playCoin();
            this.hud.showToast('🚩 Checkpoint Saved!');
          }
        } else if (currentBlock.type === 'finish_line') {
          if (!this.hasReachedFinish) {
            this.hasReachedFinish = true;
            this.voxelAudio.playVictory();
            this.voxelParticles.spawnBreakBurst(this.playerPos, 0xc084fc);
            this.showVictoryModal();
          }
        }
      }

      // Void falling check
      if (this.playerPos.y < -35) {
        this.respawnAtCheckpoint('☁️ Fell into the Void! Respawning...');
      }
    }

    // Update Avatar root position
    this.playerAvatar.root.position.copy(this.playerPos);

    // Update Avatar animations
    this.playerAvatar.updateAnimation(deltaSec, this.isMoving, this.isJumping, this.playerVelocityY);

    // Broadcast multiplayer transform
    this.multiplayer.broadcastTransform(
      this.playerPos.x,
      this.playerPos.y,
      this.playerPos.z,
      this.playerAvatar.root.rotation.y,
      this.isMoving,
      this.isJumping,
      this.playerVelocityY,
      this.equippedTool ? this.equippedTool.id : 'none'
    );

    // Camera chase or First-Person position
    if (this.isFirstPerson) {
      this.camera.position.set(this.playerPos.x, this.playerPos.y + 3.8, this.playerPos.z);
      const forward = new THREE.Vector3(
        -Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch),
        -Math.sin(this.cameraPitch),
        -Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch)
      );
      this.camera.lookAt(this.camera.position.clone().add(forward));
    } else {
      const camX = this.playerPos.x + Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch) * this.cameraDistance;
      const camY = this.playerPos.y + Math.sin(this.cameraPitch) * this.cameraDistance + 2.0;
      const camZ = this.playerPos.z + Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch) * this.cameraDistance;

      this.camera.position.set(camX, camY, camZ);
      this.camera.lookAt(this.playerPos.x, this.playerPos.y + 2.0, this.playerPos.z);
    }
  }

  private updateWorld(deltaSec: number): void {
    // 1. Rotate Obby spinner
    if (this.spinnerObstacle) {
      this.spinnerObstacle.rotation.y += deltaSec * 1.5;
    }

    // 2. Campfire flicker
    if (this.campfireLight) {
      this.campfireLight.intensity = 2.5 + Math.sin(performance.now() * 0.01) * 0.8;
    }

    // 3. Spin Coins & check collection
    this.coins.forEach((coin) => {
      if (coin.isCollected) return;

      coin.mesh.rotation.z += deltaSec * 3;
      coin.mesh.position.y = coin.baseY + Math.sin(performance.now() * 0.004 + coin.baseY) * 0.2;

      // Distance to player
      const dist = this.playerPos.distanceTo(coin.mesh.position);
      if (dist < 2.2) {
        coin.isCollected = true;
        this.scene.remove(coin.mesh);
        this.voxelAudio.playSwing();
      }
    });

    // 4. Update Scripted Entities & NPCs
    this.scriptedEntities.forEach(item => {
      this.scriptingEngine.updateEntity(
        item.entity,
        item.mesh,
        item.avatar,
        deltaSec,
        this.getPlayerAPI(),
        this.getWorldAPI()
      );
      if (item.avatar) {
        item.avatar.updateAnimation(deltaSec, false, false, 0, this.camera.position);
      }
    });
  }

  private animate = (currentTime: number): void => {
    this.animId = requestAnimationFrame(this.animate);

    const deltaMs = Math.min(50, currentTime - this.lastTime);
    this.lastTime = currentTime;
    const deltaSec = deltaMs / 1000;

    this.updateMovement(deltaSec);
    this.updateWorld(deltaSec);
    this.voxelParticles.update(deltaSec);
    this.dayNight.update(deltaSec, this.playerPos);
    this.multiplayer.update(deltaSec);

    // Voxel raycasting through center crosshair
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    this.currentTarget = this.voxelWorld.raycastTarget(this.raycaster, 14);

    this.renderer.render(this.scene, this.camera);
  };

  public getPlayerHealth(): number {
    return this.playerHealth;
  }

  public setStudioMode(active: boolean): void {
    this.isStudioMode = active;
    this.hud.setStudioMode(active);
    if (!active) {
      this.isFlyMode = false;
      this.hud.setFlyStatus(false);
    }
  }

  public loadCustomMap(map: MapData): void {
    this.activeMap = map;
    this.voxelWorld.loadBlocks(map.blocks);
    this.playerPos.set(map.spawnPoint.x, map.spawnPoint.y, map.spawnPoint.z);
    this.activeCheckpoint.copy(this.playerPos);
    if (this.playerAvatar) this.playerAvatar.root.position.copy(this.playerPos);
    this.hud.setGameTitle(map.title);
    this.hasReachedFinish = false;

    // Load custom people (NPCs) & scripted items
    this.clearScriptedEntities();
    if (map.entities && map.entities.length > 0) {
      map.entities.forEach(ent => {
        if (ent.type === 'npc') {
          this.spawnScriptedNPC(ent);
        } else {
          this.spawnScriptedItem(ent.itemType || 'portal', ent);
        }
      });
    }

    this.hud.showToast(`Loaded map: ${map.title}`);
  }

  private respawnAtCheckpoint(reason: string): void {
    this.playerPos.copy(this.activeCheckpoint);
    this.playerVelocityY = 0;
    this.playerAvatar.root.position.copy(this.playerPos);
    this.hud.showToast(reason);
  }

  private showVictoryModal(): void {
    const existing = document.getElementById('rbx-victory-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'rbx-victory-modal';
    overlay.className = 'rbx-victory-overlay';
    overlay.innerHTML = `
      <div class="rbx-victory-card">
        <div class="rbx-victory-burst">🏆 ✨ 🌟</div>
        <h2 class="rbx-victory-title">COURSE CLEARED!</h2>
        <p class="rbx-victory-subtitle">
          Outstanding run! You conquered <strong>${this.activeMap?.title || 'the Obstacle Course'}</strong>!
        </p>
        <div class="rbx-victory-stats">
          <div class="rbx-victory-stat-item">
            <span>Completion Bonus</span>
            <strong>+🪙 50 Coins</strong>
          </div>
          <div class="rbx-victory-stat-item">
            <span>Parkour Rank</span>
            <strong style="color: #facc15;">MASTER JUMPER</strong>
          </div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="rbx-btn-victory-replay" id="rbx-btn-replay">Play Again</button>
          <button class="rbx-btn-victory-edit" id="rbx-btn-edit-mode">🛠️ Open in Studio</button>
        </div>
      </div>
    `;
    this.container.appendChild(overlay);

    // Award coins
    const current = parseInt(localStorage.getItem('rbx_player_coins') || '0', 10);
    localStorage.setItem('rbx_player_coins', (current + 50).toString());

    overlay.querySelector('#rbx-btn-replay')?.addEventListener('click', () => {
      overlay.remove();
      this.hasReachedFinish = false;
      if (this.activeMap) {
        this.playerPos.set(this.activeMap.spawnPoint.x, this.activeMap.spawnPoint.y, this.activeMap.spawnPoint.z);
        this.activeCheckpoint.copy(this.playerPos);
      }
    });

    overlay.querySelector('#rbx-btn-edit-mode')?.addEventListener('click', () => {
      overlay.remove();
      this.hasReachedFinish = false;
      this.setStudioMode(true);
    });
  }

  private openSaveMapModal(): void {
    const existing = document.getElementById('rbx-save-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'rbx-save-modal';
    overlay.className = 'rbx-studio-modal-overlay';
    overlay.innerHTML = `
      <div class="rbx-studio-modal-box">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 20px; margin: 0 0 14px 0;">💾 Save Map Blueprint</h3>
        <div class="rbx-studio-input-group">
          <label>Map Title</label>
          <input type="text" id="rbx-save-title" class="rbx-studio-input" value="${this.activeMap?.title || 'My Awesome Obby'}" maxlength="40" />
        </div>
        <div class="rbx-studio-input-group">
          <label>Description</label>
          <input type="text" id="rbx-save-desc" class="rbx-studio-input" value="${this.activeMap?.description || 'A challenging parkour obstacle course with jump pads and lava hazards.'}" maxlength="120" />
        </div>
        <div class="rbx-studio-input-group">
          <label>Game Mode</label>
          <select id="rbx-save-mode" class="rbx-studio-input">
            <option value="obby">Obby / Parkour</option>
            <option value="hangout">Social Hangout</option>
            <option value="sandbox">Sandbox Creative</option>
          </select>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button id="rbx-btn-confirm-save" class="rbx-btn-victory-replay">Save Locally</button>
          <button id="rbx-btn-download-json" class="rbx-btn-victory-edit">⬇️ Export JSON</button>
          <button id="rbx-btn-close-save" class="rbx-btn-victory-edit" style="flex: 0 0 60px;">✕</button>
        </div>
      </div>
    `;
    this.container.appendChild(overlay);

    const closeBtn = overlay.querySelector('#rbx-btn-close-save');
    closeBtn?.addEventListener('click', () => overlay.remove());

    const titleInput = overlay.querySelector('#rbx-save-title') as HTMLInputElement;
    const descInput = overlay.querySelector('#rbx-save-desc') as HTMLInputElement;
    const modeSelect = overlay.querySelector('#rbx-save-mode') as HTMLSelectElement;

    overlay.querySelector('#rbx-btn-confirm-save')?.addEventListener('click', () => {
      const title = titleInput.value.trim() || 'Custom Map';
      const desc = descInput.value.trim() || '';
      const mode = modeSelect.value as any;
      const blocks = this.voxelWorld.exportBlocks();

      const mapData: MapData = {
        id: this.activeMap?.id || 'map_' + Date.now(),
        title,
        description: desc,
        author: 'You (Creator)',
        createdAt: Date.now(),
        gameMode: mode,
        spawnPoint: { x: this.playerPos.x, y: this.playerPos.y, z: this.playerPos.z },
        blocks,
        entities: this.exportScriptedEntities(),
        likes: 0,
        plays: 0,
        tags: [mode.toUpperCase(), 'Player Creation']
      };

      MapManager.getInstance().saveUserMap(mapData);
      this.activeMap = mapData;
      this.hud.setGameTitle(title);
      overlay.remove();
      this.hud.showToast(`✓ Saved "${title}" (${blocks.length} blocks, ${mapData.entities?.length || 0} scripted entities)`);
    });

    overlay.querySelector('#rbx-btn-download-json')?.addEventListener('click', () => {
      const blocks = this.voxelWorld.exportBlocks();
      const mapData: MapData = {
        id: 'map_' + Date.now(),
        title: titleInput.value.trim() || 'Custom Map',
        description: descInput.value.trim() || '',
        author: 'You (Creator)',
        createdAt: Date.now(),
        gameMode: modeSelect.value as any,
        spawnPoint: { x: this.playerPos.x, y: this.playerPos.y, z: this.playerPos.z },
        blocks,
        entities: this.exportScriptedEntities(),
        likes: 0,
        plays: 0,
        tags: ['Player Creation']
      };
      MapManager.getInstance().exportMapFile(mapData);
      this.hud.showToast('✓ Exported map JSON file with entities & scripts');
    });
  }

  private openPublishMapModal(): void {
    const existing = document.getElementById('rbx-publish-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'rbx-publish-modal';
    overlay.className = 'rbx-studio-modal-overlay';
    overlay.innerHTML = `
      <div class="rbx-studio-modal-box">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 22px; margin: 0 0 8px 0; color: #c084fc;">
          🚀 Publish to Genesis Community
        </h3>
        <p style="font-size: 13px; color: var(--rbx-text-sub); margin: 0 0 16px 0;">
          Publish your game to the community hub so any player worldwide can play your map, conquer your obstacles, and like your creation!
        </p>
        <div class="rbx-studio-input-group">
          <label>Game Title</label>
          <input type="text" id="rbx-pub-title" class="rbx-studio-input" value="${this.activeMap?.title || 'Tower of Neon Lava'}" maxlength="40" />
        </div>
        <div class="rbx-studio-input-group">
          <label>Game Description & Instructions</label>
          <input type="text" id="rbx-pub-desc" class="rbx-studio-input" value="${this.activeMap?.description || 'Can you reach the top without touching the lava? Use jump pads and hit checkpoints!'}" maxlength="140" />
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button id="rbx-btn-do-publish" class="rbx-btn-victory-replay" style="background: linear-gradient(135deg, #a855f7, #6366f1); color: #fff;">
            🚀 Publish Game Now
          </button>
          <button id="rbx-btn-close-pub" class="rbx-btn-victory-edit" style="flex: 0 0 80px;">Cancel</button>
        </div>
      </div>
    `;
    this.container.appendChild(overlay);

    overlay.querySelector('#rbx-btn-close-pub')?.addEventListener('click', () => overlay.remove());

    const titleInput = overlay.querySelector('#rbx-pub-title') as HTMLInputElement;
    const descInput = overlay.querySelector('#rbx-pub-desc') as HTMLInputElement;

    overlay.querySelector('#rbx-btn-do-publish')?.addEventListener('click', async () => {
      const title = titleInput.value.trim() || 'My Community Game';
      const desc = descInput.value.trim() || '';
      const blocks = this.voxelWorld.exportBlocks();

      const mapData: MapData = {
        id: 'pub_' + Date.now(),
        title,
        description: desc,
        author: 'Community Pioneer',
        createdAt: Date.now(),
        gameMode: 'obby',
        spawnPoint: { x: this.playerPos.x, y: this.playerPos.y, z: this.playerPos.z },
        blocks,
        entities: this.exportScriptedEntities(),
        likes: 1,
        plays: 0,
        tags: ['Obby', 'Community Published']
      };

      await MapManager.getInstance().publishToCloud(mapData);
      MapManager.getInstance().saveUserMap(mapData);
      overlay.remove();
      this.hud.showToast(`🎉 "${title}" published to Community Hub!`);
    });
  }

  private openLoadMapModal(): void {
    const existing = document.getElementById('rbx-load-modal');
    if (existing) existing.remove();

    const maps = MapManager.getInstance().getAllMaps();
    const overlay = document.createElement('div');
    overlay.id = 'rbx-load-modal';
    overlay.className = 'rbx-studio-modal-overlay';
    overlay.innerHTML = `
      <div class="rbx-studio-modal-box">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 20px; margin: 0 0 12px 0;">📂 Load Map / Template</h3>
        <p style="font-size: 13px; color: var(--rbx-text-sub); margin: 0 0 12px 0;">Select a map to immediately load into the 3D world:</p>
        
        <div class="rbx-map-list-grid">
          ${maps.map(m => `
            <div class="rbx-map-list-item">
              <div>
                <strong style="color: #fff; font-size: 14px;">${m.title}</strong>
                <div style="font-size: 11px; color: var(--rbx-text-sub); margin-top: 2px;">
                  By ${m.author} • ${m.blocks.length} Blocks • Mode: ${m.gameMode.toUpperCase()}
                </div>
              </div>
              <button class="rbx-btn-load-single rbx-hud-pill-btn green" data-map-id="${m.id}">Load ▶</button>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; gap: 8px; margin-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px;">
          <button id="rbx-btn-flat-baseplate" class="rbx-btn-victory-edit" style="font-size: 12px;">🟩 Clear to Baseplate</button>
          <button id="rbx-btn-import-json-btn" class="rbx-btn-victory-edit" style="font-size: 12px;">📂 Import JSON</button>
          <input type="file" id="rbx-file-input" accept=".json" style="display: none;" />
          <button id="rbx-btn-close-load" class="rbx-btn-victory-edit" style="flex: 0 0 60px;">✕</button>
        </div>
      </div>
    `;
    this.container.appendChild(overlay);

    overlay.querySelector('#rbx-btn-close-load')?.addEventListener('click', () => overlay.remove());

    overlay.querySelectorAll('.rbx-btn-load-single').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-map-id');
        const map = MapManager.getInstance().getMapById(id || '');
        if (map) {
          this.loadCustomMap(map);
          overlay.remove();
        }
      });
    });

    overlay.querySelector('#rbx-btn-flat-baseplate')?.addEventListener('click', () => {
      this.voxelWorld.clearWorld();
      // Generate flat 20x20 baseplate
      for (let x = -10; x <= 10; x++) {
        for (let z = -10; z <= 10; z++) {
          this.voxelWorld.setBlock(x, 0, z, 'grass');
        }
      }
      this.playerPos.set(0, 2, 0);
      this.activeCheckpoint.set(0, 2, 0);
      overlay.remove();
      this.hud.showToast('Created clean baseplate');
    });

    const fileInput = overlay.querySelector('#rbx-file-input') as HTMLInputElement;
    overlay.querySelector('#rbx-btn-import-json-btn')?.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const map = MapManager.getInstance().importMapFromJson(ev.target?.result as string);
            this.loadCustomMap(map);
            overlay.remove();
          } catch {
            alert('Invalid map JSON file.');
          }
        };
        reader.readAsText(file);
      }
    });
  }

  public destroy(): void {
    cancelAnimationFrame(this.animId);
    if (this.inspectorModal) {
      this.inspectorModal.destroy();
      this.inspectorModal = null;
    }
    this.scriptingEngine.destroy();
    this.clearScriptedEntities();
    this.multiplayer.destroy();
    this.voxelWorld.destroy();
    this.dayNight.destroy();
    this.voxelParticles.clear();
    this.renderer.dispose();
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    const overlay = document.getElementById('rbx-hud-overlay');
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  }

  /* ==========================================================================
     ROBLOX STUDIO SCRIPTING & ENTITY MANAGEMENT
     ========================================================================== */
  private getPlayerAPI(): ScriptPlayerAPI {
    return {
      name: 'Pioneer',
      position: this.playerPos,
      giveCoins: (amount: number) => {
        const cur = parseInt(localStorage.getItem('rbx_player_coins') || '0', 10);
        const next = cur + amount;
        localStorage.setItem('rbx_player_coins', next.toString());
        this.hud.showToast(`+🪙 ${amount} Coins added!`);
        this.voxelAudio.playCoin();
      },
      teleport: (x: number, y: number, z: number) => {
        this.playerPos.set(x, y, z);
        this.playerVelocityY = 0;
        this.playerAvatar.root.position.copy(this.playerPos);
      },
      launch: (forceY: number) => {
        this.playerVelocityY = forceY;
        this.isGrounded = false;
      },
      damage: (amount: number) => {
        this.playerHealth = Math.max(0, this.playerHealth - amount);
        this.hud.showToast(`💔 Took ${amount} damage! (Health: ${this.playerHealth})`);
        if (this.playerHealth <= 0) {
          this.playerHealth = 100;
          this.respawnAtCheckpoint('☠️ Defeated! Respawning at checkpoint...');
        }
      },
      heal: (amount: number) => {
        this.playerHealth = Math.min(100, this.playerHealth + amount);
        this.hud.showToast(`💚 Health restored (+${amount} HP)! Health: ${this.playerHealth}`);
      },
      boostSpeed: (durationSec: number) => {
        this.speedBoostTimer = durationSec;
        this.playerSpeed = 22;
      }
    };
  }

  private getWorldAPI(): ScriptWorldAPI {
    return {
      playSound: (name: string) => {
        if (name === 'coin') this.voxelAudio.playCoin();
        else if (name === 'bounce') this.voxelAudio.playBounce();
        else if (name === 'victory') this.voxelAudio.playVictory();
        else if (name === 'lava') this.voxelAudio.playLavaSizzle();
        else if (name === 'zombie_attack') this.voxelAudio.playZombieAttack();
        else if (name === 'zombie_groan') this.voxelAudio.playZombieGroan();
        else if (name === 'heal') this.voxelAudio.playHeal();
        else if (name === 'gunshot') this.voxelAudio.playGunshot();
        else this.voxelAudio.playSwing();
      },
      showToast: (msg: string) => this.hud.showToast(msg),
      getTime: () => this.dayNight.getTimeString(),
      removeEntity: (entityId: string) => this.removeScriptedEntity(entityId),
      spawnParticles: (pos: THREE.Vector3, color: string) => this.voxelParticles.spawnBreakBurst(pos, color)
    };
  }

  private handleEntityClick(clientX?: number, clientY?: number): boolean {
    const mouse = new THREE.Vector2(0, 0); // crosshair center fallback
    if (clientX !== undefined && clientY !== undefined) {
      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    }
    this.raycaster.setFromCamera(mouse, this.camera);
    const entityMeshes: THREE.Object3D[] = [];
    this.scriptedEntities.forEach(item => {
      entityMeshes.push(item.mesh);
    });

    const intersects = this.raycaster.intersectObjects(entityMeshes, true);
    if (intersects.length > 0 && intersects[0].distance < 18) {
      let topObj: THREE.Object3D | null = intersects[0].object;
      let foundEntityId: string | null = null;
      while (topObj && !foundEntityId) {
        if (topObj.userData && topObj.userData.entityId) {
          foundEntityId = topObj.userData.entityId;
          break;
        }
        topObj = topObj.parent;
      }

      if (foundEntityId) {
        const record = this.scriptedEntities.get(foundEntityId);
        if (record) {
          if (this.isStudioMode) {
            // Open Script and Properties Inspector in Studio mode
            this.openScriptInspector(foundEntityId);
          } else {
            // Interact / Run script in Play mode
            this.scriptingEngine.handleInteraction(
              record.entity,
              record.mesh,
              this.getPlayerAPI(),
              this.getWorldAPI()
            );
          }
          return true;
        }
      }
    }
    return false;
  }

  public spawnScriptedNPC(config?: Partial<ScriptedEntity>): ScriptedEntity {
    const forward = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw));
    const spawnPos = config?.position
      ? new THREE.Vector3(config.position.x, config.position.y, config.position.z)
      : this.playerPos.clone().add(forward.multiplyScalar(4));

    if (!config?.position) {
      const groundY = this.getGroundY(spawnPos.x, spawnPos.z);
      spawnPos.y = groundY;
    }

    const id = config?.id || 'npc_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    const avatarConfig: AvatarCustomization = config?.avatarConfig || {
      headColor: '#facc15',
      torsoColor: '#0284c7',
      leftArmColor: '#facc15',
      rightArmColor: '#facc15',
      leftLegColor: '#1e293b',
      rightLegColor: '#1e293b',
      equippedHat: 'top_hat',
      equippedShirt: 'genesis_hoodie',
      equippedPants: 'blue_jeans',
      equippedFace: 'chill',
      equippedGear: 'none'
    };

    const name = config?.name || 'Helper Pioneer';
    const avatar = new BlockyAvatar(avatarConfig, name);
    avatar.root.position.copy(spawnPos);
    this.scene.add(avatar.root);

    const entity: ScriptedEntity = {
      id,
      name,
      type: 'npc',
      position: { x: spawnPos.x, y: spawnPos.y, z: spawnPos.z },
      rotationY: 0,
      avatarConfig,
      script: config?.script || {
        behavior: 'dialogue',
        dialogueText: `Hello! I am ${name}. Welcome to Genesis Studio!`
      }
    };

    avatar.root.userData = { entityId: id };
    avatar.torsoMesh.userData = { entityId: id };

    this.scriptedEntities.set(id, { entity, mesh: avatar.root, avatar });
    this.hud.showToast(`✨ Created Person: ${name}`);
    this.voxelAudio.playBlockPlace();

    if (!config) {
      // Auto open inspector on newly created NPC
      this.openScriptInspector(id);
    }
    return entity;
  }

  public spawnScriptedItem(type: string = 'portal', config?: Partial<ScriptedEntity>): ScriptedEntity {
    const forward = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw));
    const spawnPos = config?.position
      ? new THREE.Vector3(config.position.x, config.position.y, config.position.z)
      : this.playerPos.clone().add(forward.multiplyScalar(3.5));

    if (!config?.position) {
      const groundY = this.getGroundY(spawnPos.x, spawnPos.z);
      spawnPos.y = groundY + 0.5;
    }

    const id = config?.id || 'item_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    let mesh: THREE.Object3D;
    let defaultName = 'Warp Portal';

    if (type === 'portal') {
      defaultName = 'Warp Portal';
      const geo = new THREE.TorusGeometry(1.4, 0.25, 16, 32);
      const mat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
      mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = Math.PI / 2;
    } else if (type === 'chest') {
      defaultName = 'Treasure Chest';
      const geo = new THREE.BoxGeometry(1.4, 1.2, 1.2);
      const mat = new THREE.MeshBasicMaterial({ color: 0xd97706 });
      mesh = new THREE.Mesh(geo, mat);
    } else if (type === 'bounce_pad') {
      defaultName = 'Super Launch Pad';
      const geo = new THREE.CylinderGeometry(1.8, 1.8, 0.3, 24);
      const mat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
      mesh = new THREE.Mesh(geo, mat);
    } else if (type === 'crystal') {
      defaultName = 'Power Crystal';
      const geo = new THREE.OctahedronGeometry(1.2);
      const mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      mesh = new THREE.Mesh(geo, mat);
    } else {
      defaultName = 'Genesis Coin Prop';
      const geo = new THREE.CylinderGeometry(1.0, 1.0, 0.2, 24);
      const mat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
      mesh = new THREE.Mesh(geo, mat);
    }

    const name = config?.name || defaultName;

    mesh.position.copy(spawnPos);
    mesh.userData = { entityId: id };
    this.scene.add(mesh);

    const entity: ScriptedEntity = {
      id,
      name,
      type: 'item',
      itemType: type,
      position: { x: spawnPos.x, y: spawnPos.y, z: spawnPos.z },
      script: config?.script || {
        behavior: type === 'bounce_pad' ? 'bounce' : (type === 'portal' ? 'teleport' : 'coin_reward'),
        coinAmount: 50,
        teleportTarget: { x: 0, y: 15, z: 20 }
      }
    };

    this.scriptedEntities.set(id, { entity, mesh, avatar: null });
    this.hud.showToast(`✨ Created Item: ${name}`);
    this.voxelAudio.playBlockPlace();

    if (!config) {
      // Auto open inspector on newly created item
      this.openScriptInspector(id);
    }
    return entity;
  }

  public openScriptInspector(entityId?: string): void {
    if (this.inspectorModal) {
      this.inspectorModal.destroy();
      this.inspectorModal = null;
    }

    let targetEntity: ScriptedEntity | undefined;
    if (entityId) {
      targetEntity = this.scriptedEntities.get(entityId)?.entity;
    }
    if (!targetEntity) {
      // Find closest entity to player
      let closestDist = Infinity;
      this.scriptedEntities.forEach(item => {
        const dist = this.playerPos.distanceTo(item.mesh.position);
        if (dist < closestDist) {
          closestDist = dist;
          targetEntity = item.entity;
        }
      });
    }

    if (!targetEntity) {
      targetEntity = this.spawnScriptedNPC();
    }

    this.inspectorModal = new ScriptInspectorModal(this.container, {
      entity: targetEntity,
      onSave: (updated) => {
        this.updateScriptedEntity(updated);
        this.hud.showToast(`💾 Saved properties & scripts for ${updated.name}`);
      },
      onDelete: (id) => {
        this.removeScriptedEntity(id);
        this.hud.showToast(`🗑️ Deleted entity`);
      },
      onClose: () => {
        this.inspectorModal = null;
      },
      onTestScript: (ent) => {
        const record = this.scriptedEntities.get(ent.id);
        if (record) {
          this.scriptingEngine.handleInteraction(ent, record.mesh, this.getPlayerAPI(), this.getWorldAPI());
        }
      }
    });
  }

  private updateScriptedEntity(updated: ScriptedEntity): void {
    const record = this.scriptedEntities.get(updated.id);
    if (!record) return;

    record.entity = updated;
    if (record.avatar && updated.avatarConfig) {
      record.avatar.applyCustomization(updated.avatarConfig);
    }
  }

  private removeScriptedEntity(id: string): void {
    const record = this.scriptedEntities.get(id);
    if (!record) return;

    this.scene.remove(record.mesh);
    this.scriptedEntities.delete(id);
  }

  private clearScriptedEntities(): void {
    this.scriptedEntities.forEach(item => {
      this.scene.remove(item.mesh);
    });
    this.scriptedEntities.clear();
  }

  private exportScriptedEntities(): ScriptedEntity[] {
    const list: ScriptedEntity[] = [];
    this.scriptedEntities.forEach(item => {
      list.push(item.entity);
    });
    return list;
  }
}
