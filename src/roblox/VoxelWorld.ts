import * as THREE from 'three';

export type VoxelType =
  | 'grass'
  | 'dirt'
  | 'stone'
  | 'wood'
  | 'leaves'
  | 'brick'
  | 'crystal'
  | 'glass'
  | 'sand'
  | 'lava'
  | 'bounce_pad'
  | 'speed_pad'
  | 'checkpoint'
  | 'finish_line'
  | 'gold'
  | 'obsidian'
  | 'neon_pink'
  | 'neon_cyan';

export interface VoxelBlockData {
  type: VoxelType;
  mesh: THREE.Mesh;
  light?: THREE.PointLight;
  vx: number;
  vy: number;
  vz: number;
}

export interface RaycastHitResult {
  hit: boolean;
  voxelPos: THREE.Vector3;
  adjacentPos: THREE.Vector3;
  type?: VoxelType;
  mesh?: THREE.Mesh;
}

export const VOXEL_SIZE = 2;

export class VoxelWorld {
  private scene: THREE.Scene;
  private blocks: Map<string, VoxelBlockData> = new Map();
  private raycastableMeshes: THREE.Mesh[] = [];

  // Materials Cache
  private materials: Map<string, THREE.Material | THREE.Material[]> = new Map();
  private blockGeometry: THREE.BoxGeometry;

  // Wireframe Selection Outline
  private selectionBox: THREE.LineSegments;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.blockGeometry = new THREE.BoxGeometry(VOXEL_SIZE, VOXEL_SIZE, VOXEL_SIZE);

    // Initialize procedural textures & materials
    this.initMaterials();

    // Selection wireframe (Minecraft style)
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(VOXEL_SIZE + 0.04, VOXEL_SIZE + 0.04, VOXEL_SIZE + 0.04));
    this.selectionBox = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
    );
    this.selectionBox.visible = false;
    this.scene.add(this.selectionBox);

    // Generate initial terrain
    this.generateTerrain();
  }

  private getKey(vx: number, vy: number, vz: number): string {
    return `${vx},${vy},${vz}`;
  }

  public voxelToWorld(vx: number, vy: number, vz: number): THREE.Vector3 {
    return new THREE.Vector3(
      vx * VOXEL_SIZE,
      vy * VOXEL_SIZE + VOXEL_SIZE / 2,
      vz * VOXEL_SIZE
    );
  }

  public worldToVoxel(pos: THREE.Vector3): THREE.Vector3 {
    return new THREE.Vector3(
      Math.round(pos.x / VOXEL_SIZE),
      Math.floor(pos.y / VOXEL_SIZE),
      Math.round(pos.z / VOXEL_SIZE)
    );
  }

  /**
   * Procedural canvas 16x16 pixel textures
   */
  private generatePixelCanvas(drawFn: (ctx: CanvasRenderingContext2D) => void): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d')!;
    drawFn(ctx);
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    return texture;
  }

  private initMaterials(): void {
    // 1. Dirt Texture
    const dirtTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#653a1a';
      ctx.fillRect(0, 0, 16, 16);
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          if (Math.random() < 0.25) {
            ctx.fillStyle = Math.random() < 0.5 ? '#532e14' : '#794721';
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });

    // 2. Grass Top Texture
    const grassTopTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#4ade80';
      ctx.fillRect(0, 0, 16, 16);
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          if (Math.random() < 0.35) {
            ctx.fillStyle = Math.random() < 0.5 ? '#22c55e' : '#16a34a';
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });

    // 3. Grass Side Texture (Dirt with overhanging green blades)
    const grassSideTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#653a1a';
      ctx.fillRect(0, 0, 16, 16);
      for (let x = 0; x < 16; x++) {
        for (let y = 3; y < 16; y++) {
          if (Math.random() < 0.2) {
            ctx.fillStyle = '#532e14';
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(0, 0, 16, 3);
      for (let x = 0; x < 16; x++) {
        const overhang = Math.floor(Math.random() * 3);
        ctx.fillRect(x, 3, 1, overhang);
      }
    });

    // 4. Stone Texture
    const stoneTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#78716c';
      ctx.fillRect(0, 0, 16, 16);
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          if (Math.random() < 0.3) {
            ctx.fillStyle = Math.random() < 0.5 ? '#57534e' : '#a8a29e';
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });

    // 5. Wood Side (Oak Bark)
    const woodSideTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#78350f';
      ctx.fillRect(0, 0, 16, 16);
      for (let x = 0; x < 16; x += 2) {
        ctx.fillStyle = '#92400e';
        ctx.fillRect(x, 0, 1, 16);
      }
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = '#451a03';
        ctx.fillRect(Math.floor(Math.random() * 16), Math.floor(Math.random() * 16), 1, 2);
      }
    });

    // 6. Wood Top (Rings)
    const woodTopTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#b45309';
      ctx.fillRect(0, 0, 16, 16);
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(8, 8, 5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(8, 8, 2, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 7. Leaves Texture
    const leavesTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#15803d';
      ctx.fillRect(0, 0, 16, 16);
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          if (Math.random() < 0.4) {
            ctx.fillStyle = Math.random() < 0.5 ? '#166534' : '#22c55e';
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    });

    // 8. Brick Texture
    const brickTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#cbd5e1'; // Mortar
      ctx.fillRect(0, 0, 16, 16);
      ctx.fillStyle = '#b91c1c'; // Red bricks
      // Row 1 & 3
      ctx.fillRect(1, 1, 6, 2);
      ctx.fillRect(9, 1, 6, 2);
      ctx.fillRect(1, 9, 6, 2);
      ctx.fillRect(9, 9, 6, 2);
      // Row 2 & 4 (offset)
      ctx.fillRect(5, 5, 6, 2);
      ctx.fillRect(0, 5, 3, 2);
      ctx.fillRect(13, 5, 3, 2);
      ctx.fillRect(5, 13, 6, 2);
      ctx.fillRect(0, 13, 3, 2);
      ctx.fillRect(13, 13, 3, 2);
    });

    // 9. Crystal Texture (Luminous Genesis Gem)
    const crystalTex = this.generatePixelCanvas((ctx) => {
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(0, 0, 16, 16);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(3, 3, 10, 10);
      ctx.fillStyle = '#e0f2fe';
      ctx.fillRect(5, 5, 6, 6);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(7, 7, 2, 2);
    });

    // Create Mesh Materials
    // Grass: [Right, Left, Top, Bottom, Front, Back]
    const grassMatSide = new THREE.MeshLambertMaterial({ map: grassSideTex });
    const grassMatTop = new THREE.MeshLambertMaterial({ map: grassTopTex });
    const grassMatBottom = new THREE.MeshLambertMaterial({ map: dirtTex });
    this.materials.set('grass', [
      grassMatSide,
      grassMatSide,
      grassMatTop,
      grassMatBottom,
      grassMatSide,
      grassMatSide
    ]);

    this.materials.set('dirt', new THREE.MeshLambertMaterial({ map: dirtTex }));
    this.materials.set('stone', new THREE.MeshLambertMaterial({ map: stoneTex }));

    const woodSideMat = new THREE.MeshLambertMaterial({ map: woodSideTex });
    const woodTopMat = new THREE.MeshLambertMaterial({ map: woodTopTex });
    this.materials.set('wood', [
      woodSideMat,
      woodSideMat,
      woodTopMat,
      woodTopMat,
      woodSideMat,
      woodSideMat
    ]);

    this.materials.set('leaves', new THREE.MeshLambertMaterial({ map: leavesTex }));
    this.materials.set('brick', new THREE.MeshLambertMaterial({ map: brickTex }));
    this.materials.set(
      'crystal',
      new THREE.MeshStandardMaterial({
        map: crystalTex,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.6,
        roughness: 0.2
      })
    );
    this.materials.set(
      'glass',
      new THREE.MeshStandardMaterial({
        color: 0xc7d2fe,
        transparent: true,
        opacity: 0.5,
        roughness: 0.1
      })
    );
    this.materials.set(
      'sand',
      new THREE.MeshLambertMaterial({ color: 0xfde047 })
    );

    // Obby & Creative Interactive Materials
    this.materials.set(
      'lava',
      new THREE.MeshStandardMaterial({
        color: 0xff3b00,
        emissive: 0xff2200,
        emissiveIntensity: 0.9,
        roughness: 0.3
      })
    );

    this.materials.set(
      'bounce_pad',
      new THREE.MeshStandardMaterial({
        color: 0x4ade80,
        emissive: 0x22c55e,
        emissiveIntensity: 0.7,
        roughness: 0.2
      })
    );

    this.materials.set(
      'speed_pad',
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.8,
        roughness: 0.2
      })
    );

    this.materials.set(
      'checkpoint',
      new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        emissive: 0xeab308,
        emissiveIntensity: 0.7,
        metalness: 0.8,
        roughness: 0.2
      })
    );

    this.materials.set(
      'finish_line',
      new THREE.MeshStandardMaterial({
        color: 0xc084fc,
        emissive: 0xa855f7,
        emissiveIntensity: 0.95,
        metalness: 0.5,
        roughness: 0.1
      })
    );

    this.materials.set(
      'gold',
      new THREE.MeshStandardMaterial({
        color: 0xfde047,
        metalness: 0.9,
        roughness: 0.15
      })
    );

    this.materials.set(
      'obsidian',
      new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.3,
        roughness: 0.1
      })
    );

    this.materials.set(
      'neon_pink',
      new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        emissive: 0xec4899,
        emissiveIntensity: 0.9
      })
    );

    this.materials.set(
      'neon_cyan',
      new THREE.MeshStandardMaterial({
        color: 0x22d3ee,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.9
      })
    );
  }

  public getBlockColor(type: VoxelType): number {
    switch (type) {
      case 'grass':
        return 0x22c55e;
      case 'dirt':
        return 0x653a1a;
      case 'stone':
        return 0x78716c;
      case 'wood':
        return 0x92400e;
      case 'leaves':
        return 0x16a34a;
      case 'brick':
        return 0xb91c1c;
      case 'crystal':
        return 0x38bdf8;
      case 'glass':
        return 0xc7d2fe;
      case 'sand':
        return 0xfacc15;
      case 'lava':
        return 0xff3b00;
      case 'bounce_pad':
        return 0x4ade80;
      case 'speed_pad':
        return 0x38bdf8;
      case 'checkpoint':
        return 0xfacc15;
      case 'finish_line':
        return 0xc084fc;
      case 'gold':
        return 0xfde047;
      case 'obsidian':
        return 0x0f172a;
      case 'neon_pink':
        return 0xf472b6;
      case 'neon_cyan':
        return 0x22d3ee;
    }
  }

  /**
   * Set or replace block in the voxel grid
   */
  public setBlock(vx: number, vy: number, vz: number, type: VoxelType): VoxelBlockData {
    // Remove existing if any
    this.removeBlock(vx, vy, vz);

    const mat = this.materials.get(type) || this.materials.get('stone')!;
    const mesh = new THREE.Mesh(this.blockGeometry, mat);
    const worldPos = this.voxelToWorld(vx, vy, vz);
    mesh.position.copy(worldPos);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { vx, vy, vz, type };

    this.scene.add(mesh);
    this.raycastableMeshes.push(mesh);

    let light: THREE.PointLight | undefined;
    if (type === 'crystal') {
      light = new THREE.PointLight(0x38bdf8, 2, 12);
      light.position.copy(worldPos);
      this.scene.add(light);
    } else if (type === 'lava') {
      light = new THREE.PointLight(0xff3b00, 1.8, 10);
      light.position.copy(worldPos);
      this.scene.add(light);
    } else if (type === 'checkpoint') {
      light = new THREE.PointLight(0xfacc15, 1.5, 8);
      light.position.copy(worldPos);
      this.scene.add(light);
    } else if (type === 'finish_line') {
      light = new THREE.PointLight(0xc084fc, 2.5, 14);
      light.position.copy(worldPos);
      this.scene.add(light);
    }

    const blockData: VoxelBlockData = { type, mesh, light, vx, vy, vz };
    this.blocks.set(this.getKey(vx, vy, vz), blockData);
    return blockData;
  }

  /**
   * Remove block from voxel world
   */
  public removeBlock(vx: number, vy: number, vz: number): { type: VoxelType; color: number } | null {
    const key = this.getKey(vx, vy, vz);
    const existing = this.blocks.get(key);
    if (!existing) return null;

    this.scene.remove(existing.mesh);
    if (existing.light) {
      this.scene.remove(existing.light);
    }

    const idx = this.raycastableMeshes.indexOf(existing.mesh);
    if (idx !== -1) {
      this.raycastableMeshes.splice(idx, 1);
    }

    this.blocks.delete(key);
    return {
      type: existing.type,
      color: this.getBlockColor(existing.type)
    };
  }

  public getBlock(vx: number, vy: number, vz: number): VoxelBlockData | undefined {
    return this.blocks.get(this.getKey(vx, vy, vz));
  }

  /**
   * Procedurally generate Minecraft-style terrain
   */
  private generateTerrain(): void {
    const radius = 18; // 36x36 voxel world

    for (let vx = -radius; vx <= radius; vx++) {
      for (let vz = -radius; vz <= radius; vz++) {
        const distFromCenter = Math.sqrt(vx * vx + vz * vz);

        // Rolling hill height
        let h = Math.round(
          Math.sin(vx * 0.22) * 1.6 +
          Math.cos(vz * 0.26) * 1.6
        );

        // Keep center clearing flat for the spawn and campfire
        if (distFromCenter < 6) {
          h = 0;
        }

        // Fill subterranean layers
        for (let vy = -2; vy <= h; vy++) {
          if (vy === h) {
            this.setBlock(vx, vy, vz, 'grass');
          } else if (vy >= h - 1) {
            this.setBlock(vx, vy, vz, 'dirt');
          } else {
            // Stone layer with chance of crystal ore
            const isCrystalOre = Math.random() < 0.05 && distFromCenter > 7;
            this.setBlock(vx, vy, vz, isCrystalOre ? 'crystal' : 'stone');
          }
        }
      }
    }

    // Plant Procedural Oak Trees
    const treePositions = [
      { x: 8, z: 8 },
      { x: -9, z: 10 },
      { x: -11, z: -8 },
      { x: 12, z: -9 },
      { x: 15, z: 2 },
      { x: -14, z: 2 }
    ];

    treePositions.forEach((tp) => {
      this.buildTree(tp.x, tp.z);
    });
  }

  private buildTree(vx: number, vz: number): void {
    // Find ground elevation at (vx, vz)
    let groundY = 0;
    for (let vy = 6; vy >= -2; vy--) {
      if (this.getBlock(vx, vy, vz)) {
        groundY = vy;
        break;
      }
    }

    const trunkHeight = 4;
    // Wood Trunk
    for (let y = 1; y <= trunkHeight; y++) {
      this.setBlock(vx, groundY + y, vz, 'wood');
    }

    // Leaf Canopy
    const leafBase = groundY + trunkHeight;
    for (let lx = -2; lx <= 2; lx++) {
      for (let lz = -2; lz <= 2; lz++) {
        for (let ly = 0; ly <= 1; ly++) {
          // Skip tree corners for rounded canopy look
          if (Math.abs(lx) === 2 && Math.abs(lz) === 2) continue;
          // Don't overwrite trunk
          if (lx === 0 && lz === 0 && ly === 0) continue;
          this.setBlock(vx + lx, leafBase + ly, vz + lz, 'leaves');
        }
      }
    }

    // Crown top
    for (let lx = -1; lx <= 1; lx++) {
      for (let lz = -1; lz <= 1; lz++) {
        if (Math.abs(lx) === 1 && Math.abs(lz) === 1) continue;
        this.setBlock(vx + lx, leafBase + 2, vz + lz, 'leaves');
      }
    }
  }

  /**
   * Raycast from crosshair to detect targeted block and adjacent face
   */
  public raycastTarget(raycaster: THREE.Raycaster, maxDistance: number = 16): RaycastHitResult {
    const intersects = raycaster.intersectObjects(this.raycastableMeshes, false);

    if (intersects.length > 0 && intersects[0].distance <= maxDistance) {
      const hit = intersects[0];
      const mesh = hit.object as THREE.Mesh;
      const data = mesh.userData as { vx: number; vy: number; vz: number; type: VoxelType };

      if (data && hit.face) {
        const voxelPos = new THREE.Vector3(data.vx, data.vy, data.vz);
        const normal = hit.face.normal.clone();
        // Transform normal to world space
        normal.transformDirection(mesh.matrixWorld).round();

        const adjacentPos = voxelPos.clone().add(normal);

        // Update wireframe selection outline
        this.selectionBox.position.copy(mesh.position);
        this.selectionBox.visible = true;

        return {
          hit: true,
          voxelPos,
          adjacentPos,
          type: data.type,
          mesh
        };
      }
    }

    this.selectionBox.visible = false;
    return {
      hit: false,
      voxelPos: new THREE.Vector3(),
      adjacentPos: new THREE.Vector3()
    };
  }

  public hideSelection(): void {
    this.selectionBox.visible = false;
  }

  public clearWorld(): void {
    this.blocks.forEach((b) => {
      this.scene.remove(b.mesh);
      if (b.light) this.scene.remove(b.light);
    });
    this.blocks.clear();
    this.raycastableMeshes = [];
    this.hideSelection();
  }

  public exportBlocks(): Array<{ vx: number; vy: number; vz: number; type: VoxelType }> {
    const list: Array<{ vx: number; vy: number; vz: number; type: VoxelType }> = [];
    this.blocks.forEach((b) => {
      list.push({ vx: b.vx, vy: b.vy, vz: b.vz, type: b.type });
    });
    return list;
  }

  public loadBlocks(blocks: Array<{ vx: number; vy: number; vz: number; type: VoxelType }>): void {
    this.clearWorld();
    blocks.forEach((b) => {
      this.setBlock(b.vx, b.vy, b.vz, b.type);
    });
  }

  public destroy(): void {
    this.clearWorld();
    this.scene.remove(this.selectionBox);
  }
}
