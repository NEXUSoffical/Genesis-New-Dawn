import * as THREE from 'three';
import { AvatarCustomization } from './types';

export class BlockyAvatar {
  public root: THREE.Group;
  public headGroup: THREE.Group;
  public torsoMesh: THREE.Mesh;
  public headMesh: THREE.Mesh;
  public leftArmGroup: THREE.Group;
  public rightArmGroup: THREE.Group;
  public leftLegGroup: THREE.Group;
  public rightLegGroup: THREE.Group;
  public toolAttachment: THREE.Group;

  private leftArmMesh: THREE.Mesh;
  private rightArmMesh: THREE.Mesh;
  private leftLegMesh: THREE.Mesh;
  private rightLegMesh: THREE.Mesh;
  private hatMesh: THREE.Group | null = null;
  private gearMesh: THREE.Group | null = null;
  private nameTagSprite: THREE.Sprite | null = null;

  private animTime: number = 0;
  private toolSwingTime: number = 0;
  private customization: AvatarCustomization;

  constructor(customization: AvatarCustomization, name: string = 'Player') {
    this.customization = customization;
    this.root = new THREE.Group();

    // 1. Create Torso (2 x 2 x 1)
    const torsoGeo = new THREE.BoxGeometry(2, 2, 1);
    const torsoMats = this.createTorsoMaterials(customization.equippedShirt, customization.torsoColor);
    this.torsoMesh = new THREE.Mesh(torsoGeo, torsoMats);
    this.torsoMesh.position.y = 3;
    this.torsoMesh.castShadow = true;
    this.torsoMesh.receiveShadow = true;
    this.root.add(this.torsoMesh);

    // 2. Create Head & Face (1.25 x 1.25 x 1.25)
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 1.625, 0);
    this.torsoMesh.add(this.headGroup);

    const headGeo = new THREE.BoxGeometry(1.25, 1.25, 1.25);
    const headMats = this.createHeadMaterials(customization.headColor, customization.equippedFace);
    this.headMesh = new THREE.Mesh(headGeo, headMats);
    this.headMesh.castShadow = true;
    this.headGroup.add(this.headMesh);

    // 3. Create Left Arm & Shoulder Joint (-1.5, 1, 0 relative to torso)
    this.leftArmGroup = new THREE.Group();
    this.leftArmGroup.position.set(-1.5, 1, 0);
    this.torsoMesh.add(this.leftArmGroup);

    const armGeo = new THREE.BoxGeometry(1, 2, 1);
    armGeo.translate(0, -1, 0); // Pivot at shoulder
    const leftArmMat = new THREE.MeshLambertMaterial({ color: customization.leftArmColor });
    this.leftArmMesh = new THREE.Mesh(armGeo, leftArmMat);
    this.leftArmMesh.castShadow = true;
    this.leftArmGroup.add(this.leftArmMesh);

    // 4. Create Right Arm & Shoulder Joint (1.5, 1, 0 relative to torso)
    this.rightArmGroup = new THREE.Group();
    this.rightArmGroup.position.set(1.5, 1, 0);
    this.torsoMesh.add(this.rightArmGroup);

    const rightArmMat = new THREE.MeshLambertMaterial({ color: customization.rightArmColor });
    this.rightArmMesh = new THREE.Mesh(armGeo.clone(), rightArmMat);
    this.rightArmMesh.castShadow = true;
    this.rightArmGroup.add(this.rightArmMesh);

    // Tool hand attachment
    this.toolAttachment = new THREE.Group();
    this.toolAttachment.position.set(0, -2, 0.4);
    this.rightArmGroup.add(this.toolAttachment);

    // 5. Create Left Leg & Hip Joint (-0.5, -1, 0 relative to torso)
    this.leftLegGroup = new THREE.Group();
    this.leftLegGroup.position.set(-0.5, -1, 0);
    this.torsoMesh.add(this.leftLegGroup);

    const legGeo = new THREE.BoxGeometry(1, 2, 1);
    legGeo.translate(0, -1, 0); // Pivot at hip
    const leftLegMat = new THREE.MeshLambertMaterial({ color: customization.leftLegColor });
    this.leftLegMesh = new THREE.Mesh(legGeo, leftLegMat);
    this.leftLegMesh.castShadow = true;
    this.leftLegGroup.add(this.leftLegMesh);

    // 6. Create Right Leg & Hip Joint (0.5, -1, 0 relative to torso)
    this.rightLegGroup = new THREE.Group();
    this.rightLegGroup.position.set(0.5, -1, 0);
    this.torsoMesh.add(this.rightLegGroup);

    const rightLegMat = new THREE.MeshLambertMaterial({ color: customization.rightLegColor });
    this.rightLegMesh = new THREE.Mesh(legGeo.clone(), rightLegMat);
    this.rightLegMesh.castShadow = true;
    this.rightLegGroup.add(this.rightLegMesh);

    // 7. Equip Initial Hat & Accessories
    this.applyHat(customization.equippedHat);
    this.applyGear(customization.equippedGear);

    // 8. Overhead Name Billboard
    this.createNameTag(name);
  }

  private createHeadMaterials(headColor: string, faceStyle: string): THREE.Material[] {
    const baseMat = new THREE.MeshLambertMaterial({ color: headColor });
    const faceMat = new THREE.MeshLambertMaterial({
      map: this.generateFaceTexture(faceStyle, headColor),
      color: 0xffffff,
      transparent: false
    });

    // BoxGeometry order: [right, left, top, bottom, front (+z), back (-z)]
    return [baseMat, baseMat, baseMat, baseMat, faceMat, baseMat];
  }

  private generateFaceTexture(faceStyle: string, bgColor: string): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Fill background with skin color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 256, 256);

    ctx.fillStyle = '#111827';
    ctx.strokeStyle = '#111827';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';

    if (faceStyle === 'chill') {
      // Chill eyes (horizontal curved lines)
      ctx.beginPath();
      ctx.arc(75, 95, 26, Math.PI, 0, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(181, 95, 26, Math.PI, 0, false);
      ctx.stroke();

      // Chill slight smile
      ctx.beginPath();
      ctx.arc(128, 140, 45, 0.2 * Math.PI, 0.8 * Math.PI, false);
      ctx.stroke();
    } else if (faceStyle === 'epic_face') {
      // Big cartoon open eyes
      ctx.beginPath();
      ctx.ellipse(75, 90, 24, 34, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(181, 90, 24, 34, 0, 0, Math.PI * 2);
      ctx.fill();

      // Giant open grin
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(128, 145, 60, 0, Math.PI, false);
      ctx.fill();
      ctx.stroke();

      // White teeth bar
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(80, 145, 96, 18);
    } else if (faceStyle === 'mischief') {
      // Wink eye left, round eye right
      ctx.beginPath();
      ctx.moveTo(50, 95);
      ctx.lineTo(95, 95);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(180, 90, 20, 0, Math.PI * 2);
      ctx.fill();

      // Smirk
      ctx.beginPath();
      ctx.arc(140, 150, 36, 0.1 * Math.PI, 0.6 * Math.PI, false);
      ctx.stroke();
    } else {
      // Classic Roblox Default Smile
      // Left eye
      ctx.beginPath();
      ctx.arc(75, 90, 18, 0, Math.PI * 2);
      ctx.fill();
      // Right eye
      ctx.beginPath();
      ctx.arc(181, 90, 18, 0, Math.PI * 2);
      ctx.fill();

      // Wide cheerful smile
      ctx.beginPath();
      ctx.arc(128, 135, 48, 0.15 * Math.PI, 0.85 * Math.PI, false);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private createTorsoMaterials(shirtId: string, baseColor: string): THREE.Material[] {
    const baseMat = new THREE.MeshLambertMaterial({ color: baseColor });
    if (!shirtId || shirtId === 'none') {
      return [baseMat, baseMat, baseMat, baseMat, baseMat, baseMat];
    }

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    if (shirtId === 'synthetic_skin') {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 256, 256);

      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.strokeRect(20, 20, 100, 100);
      ctx.strokeRect(136, 20, 100, 100);
      ctx.strokeRect(30, 140, 196, 90);

      const grad = ctx.createRadialGradient(128, 90, 5, 128, 90, 45);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, '#38bdf8');
      grad.addColorStop(0.8, '#0284c7');
      grad.addColorStop(1, 'rgba(2, 132, 199, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(128, 90, 45, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(128, 90, 22, 0, Math.PI * 2);
      ctx.stroke();

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      const frontMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3, metalness: 0.7 });
      const sideMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.6 });
      return [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat];
    } else if (shirtId === 'starweaver_robes') {
      const bgGrad = ctx.createLinearGradient(0, 0, 256, 256);
      bgGrad.addColorStop(0, '#1e1b4b');
      bgGrad.addColorStop(0.5, '#312e81');
      bgGrad.addColorStop(1, '#4c1d95');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 6;
      ctx.strokeRect(16, 16, 224, 224);

      const stars = [[50, 60], [90, 100], [150, 80], [200, 130], [80, 180], [170, 200], [128, 140]];
      ctx.strokeStyle = 'rgba(250, 204, 21, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < stars.length - 1; i++) {
        ctx.moveTo(stars[i][0], stars[i][1]);
        ctx.lineTo(stars[i + 1][0], stars[i + 1][1]);
      }
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      stars.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      const frontMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 });
      const sideMat = new THREE.MeshStandardMaterial({ color: 0x312e81, roughness: 0.5 });
      return [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat];
    }

    return [baseMat, baseMat, baseMat, baseMat, baseMat, baseMat];
  }

  public applyCustomization(customization: AvatarCustomization): void {
    this.customization = customization;
    this.torsoMesh.material = this.createTorsoMaterials(customization.equippedShirt || 'none', customization.torsoColor);
    (this.leftArmMesh.material as THREE.MeshLambertMaterial).color.set(customization.leftArmColor);
    (this.rightArmMesh.material as THREE.MeshLambertMaterial).color.set(customization.rightArmColor);
    (this.leftLegMesh.material as THREE.MeshLambertMaterial).color.set(customization.leftLegColor);
    (this.rightLegMesh.material as THREE.MeshLambertMaterial).color.set(customization.rightLegColor);

    // Refresh head
    this.headMesh.material = this.createHeadMaterials(customization.headColor, customization.equippedFace);

    // Refresh hat & gear
    this.applyHat(customization.equippedHat);
    this.applyGear(customization.equippedGear);
  }

  public getCustomization(): AvatarCustomization {
    return this.customization;
  }

  public applyHat(hatId: string): void {
    if (this.hatMesh) {
      this.headGroup.remove(this.hatMesh);
      this.hatMesh = null;
    }
    if (hatId === 'none') return;

    this.hatMesh = new THREE.Group();

    if (hatId === 'classic_fedora') {
      const brim = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.3, 0.1, 16),
        new THREE.MeshLambertMaterial({ color: 0x1f2937 })
      );
      brim.position.y = 0.65;
      const crown = new THREE.Mesh(
        new THREE.CylinderGeometry(0.75, 0.85, 0.7, 16),
        new THREE.MeshLambertMaterial({ color: 0x111827 })
      );
      crown.position.y = 1.0;
      const ribbon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.86, 0.86, 0.15, 16),
        new THREE.MeshLambertMaterial({ color: 0xd97706 })
      );
      ribbon.position.y = 0.75;
      this.hatMesh.add(brim, crown, ribbon);
    } else if (hatId === 'top_hat') {
      const brim = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 0.08, 16),
        new THREE.MeshLambertMaterial({ color: 0x111827 })
      );
      brim.position.y = 0.65;
      const crown = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.7, 1.2, 16),
        new THREE.MeshLambertMaterial({ color: 0x1f242d })
      );
      crown.position.y = 1.25;
      const ribbon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.72, 0.72, 0.2, 16),
        new THREE.MeshLambertMaterial({ color: 0xdc2626 })
      );
      ribbon.position.y = 0.78;
      this.hatMesh.add(brim, crown, ribbon);
    } else if (hatId === 'cyberpunk_visor') {
      const visor = new THREE.Mesh(
        new THREE.BoxGeometry(1.35, 0.35, 0.45),
        new THREE.MeshStandardMaterial({
          color: 0x06b6d4,
          emissive: 0x06b6d4,
          emissiveIntensity: 0.9,
          roughness: 0.1
        })
      );
      visor.position.set(0, 0, 0.55);
      const band = new THREE.Mesh(
        new THREE.BoxGeometry(1.38, 0.18, 1.38),
        new THREE.MeshLambertMaterial({ color: 0x0f172a })
      );
      this.hatMesh.add(visor, band);
    } else if (hatId === 'eagle_eye') {
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(1.3, 0.25, 0.3),
        new THREE.MeshLambertMaterial({ color: 0x78350f })
      );
      frame.position.set(0, 0.05, 0.55);
      const leftLens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 0.15, 12),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.4 })
      );
      leftLens.rotation.x = Math.PI / 2;
      leftLens.position.set(-0.35, 0.05, 0.7);
      const rightLens = leftLens.clone();
      rightLens.position.x = 0.35;
      this.hatMesh.add(frame, leftLens, rightLens);
    } else if (hatId === 'viking_helmet') {
      const bowl = new THREE.Mesh(
        new THREE.CylinderGeometry(0.75, 0.75, 0.45, 12),
        new THREE.MeshLambertMaterial({ color: 0x9ca3af })
      );
      bowl.position.y = 0.8;
      const hornLeft = new THREE.Mesh(
        new THREE.ConeGeometry(0.2, 0.7, 8),
        new THREE.MeshLambertMaterial({ color: 0xfef08a })
      );
      hornLeft.position.set(-0.8, 1.0, 0);
      hornLeft.rotation.z = Math.PI / 4;
      const hornRight = hornLeft.clone();
      hornRight.position.set(0.8, 1.0, 0);
      hornRight.rotation.z = -Math.PI / 4;
      this.hatMesh.add(bowl, hornLeft, hornRight);
    } else if (hatId === 'halo' || hatId === 'supporter_halo') {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.8, 0.1, 8, 24),
        new THREE.MeshBasicMaterial({ color: 0xfacc15 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 1.35;
      this.hatMesh.add(ring);
    }

    this.headGroup.add(this.hatMesh);
  }

  public applyGear(gearId: string): void {
    if (this.gearMesh) {
      this.toolAttachment.remove(this.gearMesh);
      this.gearMesh = null;
    }
    if (gearId === 'none') return;

    this.gearMesh = new THREE.Group();

    if (gearId === 'sword') {
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.6, 8),
        new THREE.MeshLambertMaterial({ color: 0x78350f })
      );
      const guard = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.1, 0.2),
        new THREE.MeshLambertMaterial({ color: 0xf59e0b })
      );
      guard.position.y = 0.3;
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 1.8, 0.06),
        new THREE.MeshLambertMaterial({ color: 0x38bdf8 })
      );
      blade.position.y = 1.25;
      this.gearMesh.add(handle, guard, blade);
      this.gearMesh.rotation.x = Math.PI / 2;
    } else if (gearId === 'speed_coil') {
      const coil = new THREE.Mesh(
        new THREE.TorusGeometry(0.4, 0.1, 8, 16),
        new THREE.MeshBasicMaterial({ color: 0x00a2ff })
      );
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.6, 8),
        new THREE.MeshLambertMaterial({ color: 0x1e293b })
      );
      coil.position.y = 0.3;
      this.gearMesh.add(handle, coil);
      this.gearMesh.rotation.x = Math.PI / 2;
    } else if (gearId === 'axe') {
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.4, 8),
        new THREE.MeshLambertMaterial({ color: 0x92400e })
      );
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.12),
        new THREE.MeshLambertMaterial({ color: 0x94a3b8 })
      );
      blade.position.set(0.2, 0.5, 0);
      this.gearMesh.add(handle, blade);
      this.gearMesh.rotation.x = Math.PI / 2;
    } else if (gearId === 'pickaxe') {
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.5, 8),
        new THREE.MeshLambertMaterial({ color: 0x78350f })
      );
      const pickHead = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.16, 0.14),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.6, roughness: 0.3 })
      );
      pickHead.position.set(0, 0.65, 0);
      const tipL = new THREE.Mesh(
        new THREE.ConeGeometry(0.12, 0.3, 4),
        new THREE.MeshStandardMaterial({ color: 0x0284c7 })
      );
      tipL.position.set(-0.65, 0.65, 0);
      tipL.rotation.z = Math.PI / 2;
      const tipR = tipL.clone();
      tipR.position.set(0.65, 0.65, 0);
      tipR.rotation.z = -Math.PI / 2;

      this.gearMesh.add(handle, pickHead, tipL, tipR);
      this.gearMesh.rotation.x = Math.PI / 2;
    } else if (gearId.startsWith('block_')) {
      const blockType = gearId.replace('block_', '');
      const blockColors: { [key: string]: number } = {
        grass: 0x22c55e,
        stone: 0x78716c,
        wood: 0x78350f,
        leaves: 0x16a34a,
        brick: 0xb91c1c,
        crystal: 0x38bdf8,
        dirt: 0x653a1a,
        sand: 0xfacc15
      };
      const col = blockColors[blockType] || 0x38bdf8;
      const miniBlock = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.7, 0.7),
        new THREE.MeshLambertMaterial({ color: col })
      );
      miniBlock.position.set(0, 0.3, 0);
      this.gearMesh.add(miniBlock);
      this.gearMesh.rotation.x = Math.PI / 4;
    } else if (gearId === 'wings') {
      // Wings go on Torso back
      const wingLeft = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.8, 0.05),
        new THREE.MeshLambertMaterial({ color: 0x38bdf8 })
      );
      wingLeft.position.set(-1.2, 0.5, -0.6);
      wingLeft.rotation.z = Math.PI / 8;
      const wingRight = wingLeft.clone();
      wingRight.position.set(1.2, 0.5, -0.6);
      wingRight.rotation.z = -Math.PI / 8;
      this.gearMesh.add(wingLeft, wingRight);
      this.torsoMesh.add(this.gearMesh);
      return;
    }

    this.toolAttachment.add(this.gearMesh);
  }

  private createNameTag(name: string): void {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // Rounded background
    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.beginPath();
    ctx.roundRect(8, 8, 240, 48, 16);
    ctx.fill();

    // Text
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, depthTest: false });
    this.nameTagSprite = new THREE.Sprite(spriteMat);
    this.nameTagSprite.position.set(0, 3.2, 0);
    this.nameTagSprite.scale.set(3, 0.75, 1);
    this.torsoMesh.add(this.nameTagSprite);
  }

  public triggerToolSwing(): void {
    this.toolSwingTime = 0.35; // 350ms swing
  }

  public updateAnimation(
    deltaSec: number,
    isMoving: boolean,
    isJumping: boolean,
    velocityY: number
  ): void {
    this.animTime += deltaSec * 8;

    // Handle tool swing
    if (this.toolSwingTime > 0) {
      this.toolSwingTime -= deltaSec;
      const swingProg = Math.max(0, this.toolSwingTime / 0.35);
      this.rightArmGroup.rotation.x = -Math.sin(swingProg * Math.PI) * 1.5;
    }

    if (isJumping) {
      // Classic Roblox Jump Pose
      this.leftArmGroup.rotation.x = -Math.PI * 0.75;
      if (this.toolSwingTime <= 0) {
        this.rightArmGroup.rotation.x = -Math.PI * 0.75;
      }
      this.leftLegGroup.rotation.x = Math.PI * 0.2;
      this.rightLegGroup.rotation.x = -Math.PI * 0.15;
      this.headGroup.rotation.x = velocityY > 0 ? -0.2 : 0.2;
    } else if (isMoving) {
      // Classic Roblox Alternating Walk Limb Swing
      const walkAngle = Math.sin(this.animTime) * 0.8;
      this.leftArmGroup.rotation.x = -walkAngle;
      if (this.toolSwingTime <= 0) {
        this.rightArmGroup.rotation.x = walkAngle;
      }
      this.leftLegGroup.rotation.x = walkAngle;
      this.rightLegGroup.rotation.x = -walkAngle;

      // Subtle torso bob
      this.torsoMesh.position.y = 3 + Math.abs(Math.sin(this.animTime * 2)) * 0.12;
      this.headGroup.rotation.x = 0;
    } else {
      // Idle Pose & Subtle Breathing
      const breath = Math.sin(this.animTime * 0.35) * 0.05;
      this.leftArmGroup.rotation.x = breath;
      if (this.toolSwingTime <= 0) {
        this.rightArmGroup.rotation.x = breath;
      }
      this.leftLegGroup.rotation.x = 0;
      this.rightLegGroup.rotation.x = 0;
      this.torsoMesh.position.y = 3 + breath * 0.5;
      this.headGroup.rotation.x = 0;
    }
  }

  public setFirstPerson(enabled: boolean): void {
    this.headGroup.visible = !enabled;
    this.torsoMesh.visible = !enabled;
    this.leftArmGroup.visible = !enabled;
    this.leftLegGroup.visible = !enabled;
    this.rightLegGroup.visible = !enabled;
    if (this.nameTagSprite) {
      this.nameTagSprite.visible = !enabled;
    }
    // Note: When enabled, rightArmGroup can be toggled or kept visible
    this.rightArmGroup.visible = true;
  }
}
