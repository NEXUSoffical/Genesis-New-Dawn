import * as THREE from 'three';
import { BlockyAvatar } from './BlockyAvatar';
import { AvatarCustomization } from './types';

export const DEFAULT_AVATAR: AvatarCustomization = {
  headColor: '#fdba74',
  torsoColor: '#1e293b',
  leftArmColor: '#fdba74',
  rightArmColor: '#fdba74',
  leftLegColor: '#0f172a',
  rightLegColor: '#0f172a',
  equippedHat: 'none',
  equippedShirt: 'none',
  equippedPants: 'none',
  equippedFace: 'smile',
  equippedGear: 'none'
};

export const ROBLOX_PALETTE = [
  '#facc15', // Bright Yellow
  '#0284c7', // Bright Blue
  '#16a34a', // Medium Green
  '#dc2626', // Bright Red
  '#ffffff', // White
  '#111827', // Black
  '#f97316', // Orange
  '#a855f7', // Purple
  '#ec4899', // Pink
  '#78350f', // Brown
  '#94a3b8', // Light Stone Grey
  '#334155', // Dark Stone Grey
  '#10b981', // Emerald
  '#06b6d4', // Cyan
  '#fde047', // Pastel Yellow
  '#fdba74'  // Pastel Skin
];

export class AvatarEditor3D {
  private canvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private avatar: BlockyAvatar;
  private currentCustomization: AvatarCustomization;

  private isDragging: boolean = false;
  private prevMouseX: number = 0;
  private avatarRotationY: number = 0;
  private animId: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.currentCustomization = this.loadCustomization();

    // Three.js setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    this.camera.position.set(0, 3, 9.5);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 10, 7);
    this.scene.add(dirLight);

    // Pedestal disk
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(2.5, 2.7, 0.3, 32),
      new THREE.MeshLambertMaterial({ color: 0x1e293b })
    );
    pedestal.position.y = -0.15;
    this.scene.add(pedestal);

    // Spawn Avatar
    this.avatar = new BlockyAvatar(this.currentCustomization, 'You');
    this.scene.add(this.avatar.root);

    this.setupMouseEvents();
    this.animate();
  }

  private loadCustomization(): AvatarCustomization {
    try {
      const saved = localStorage.getItem('rbx_avatar_customization');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return { ...DEFAULT_AVATAR };
  }

  public saveCustomization(): void {
    localStorage.setItem('rbx_avatar_customization', JSON.stringify(this.currentCustomization));
  }

  public getCustomization(): AvatarCustomization {
    return { ...this.currentCustomization };
  }

  public updatePartColor(partKey: keyof AvatarCustomization, color: string): void {
    (this.currentCustomization as any)[partKey] = color;
    this.avatar.applyCustomization(this.currentCustomization);
    this.saveCustomization();
  }

  public updateHat(hatId: string): void {
    this.currentCustomization.equippedHat = hatId;
    this.avatar.applyHat(hatId);
    this.saveCustomization();
  }

  public updateGear(gearId: string): void {
    this.currentCustomization.equippedGear = gearId;
    this.avatar.applyGear(gearId);
    this.saveCustomization();
  }

  public updateShirt(shirtId: string): void {
    this.currentCustomization.equippedShirt = shirtId;
    this.avatar.applyCustomization(this.currentCustomization);
    this.saveCustomization();
  }

  public updateFace(faceId: string): void {
    this.currentCustomization.equippedFace = faceId;
    this.avatar.applyCustomization(this.currentCustomization);
    this.saveCustomization();
  }

  private setupMouseEvents(): void {
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.prevMouseX = e.clientX;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.prevMouseX;
      this.avatarRotationY += deltaX * 0.015;
      this.prevMouseX = e.clientX;
    });

    // Touch support
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        this.isDragging = true;
        this.prevMouseX = e.touches[0].clientX;
      }
    });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - this.prevMouseX;
      this.avatarRotationY += deltaX * 0.02;
      this.prevMouseX = e.touches[0].clientX;
    });
  }

  public resize(): void {
    if (!this.canvas) return;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (width > 0 && height > 0) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
  }

  private animate = (): void => {
    this.animId = requestAnimationFrame(this.animate);

    // Smooth subtle idle rotation when not dragging
    if (!this.isDragging) {
      this.avatarRotationY += 0.004;
    }

    this.avatar.root.rotation.y = this.avatarRotationY;
    this.avatar.updateAnimation(0.016, false, false, 0);

    this.renderer.render(this.scene, this.camera);
  };

  public destroy(): void {
    cancelAnimationFrame(this.animId);
    this.renderer.dispose();
  }
}
