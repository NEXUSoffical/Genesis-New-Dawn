import * as THREE from 'three';

export class ShopItemRenderer {
  private static sharedRenderer: THREE.WebGLRenderer | null = null;

  private static getRenderer(): THREE.WebGLRenderer {
    if (!this.sharedRenderer) {
      this.sharedRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      this.sharedRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.sharedRenderer.shadowMap.enabled = true;
    }
    return this.sharedRenderer;
  }

  /**
   * Builds the exact 3D model for the given shop item.
   */
  public static createItem3DGroup(itemId: string): THREE.Group {
    const root = new THREE.Group();

    switch (itemId) {
      case 'synthetic_skin': {
        // 3D Blocky Torso Mannequin with Synthetic Cyber Plating & Arc Reactor
        const torsoGeo = new THREE.BoxGeometry(1.8, 1.8, 0.9);
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d')!;
        
        // Dark carbon-fiber cyber body
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, 256, 256);
        
        // Armor plate panels
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 4;
        ctx.strokeRect(20, 20, 100, 100);
        ctx.strokeRect(136, 20, 100, 100);
        ctx.strokeRect(30, 140, 196, 90);
        
        // Glowing Arc Reactor in center
        const grad = ctx.createRadialGradient(128, 90, 5, 128, 90, 45);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, '#38bdf8');
        grad.addColorStop(0.8, '#0284c7');
        grad.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(128, 90, 45, 0, Math.PI * 2);
        ctx.fill();

        // Core ring
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(128, 90, 22, 0, Math.PI * 2);
        ctx.stroke();

        const tex = new THREE.CanvasTexture(canvas);
        const frontMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3, metalness: 0.7 });
        const sideMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.6 });
        const torso = new THREE.Mesh(torsoGeo, [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat]);
        root.add(torso);

        // Cyber shoulder pads
        const padGeo = new THREE.BoxGeometry(0.5, 0.3, 1.0);
        const padMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8 });
        const padL = new THREE.Mesh(padGeo, padMat);
        padL.position.set(-1.0, 0.8, 0);
        const padR = padL.clone();
        padR.position.x = 1.0;
        root.add(padL, padR);
        break;
      }

      case 'starweaver_robes': {
        // 3D Blocky Torso Mannequin with Starweaver Silk & Constellations
        const torsoGeo = new THREE.BoxGeometry(1.8, 1.8, 0.9);
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d')!;

        // Cosmic gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 256, 256);
        bgGrad.addColorStop(0, '#1e1b4b');
        bgGrad.addColorStop(0.5, '#312e81');
        bgGrad.addColorStop(1, '#4c1d95');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 256, 256);

        // Golden embroidery trim
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 6;
        ctx.strokeRect(16, 16, 224, 224);

        // Constellation stars
        const stars = [[50, 60], [90, 100], [150, 80], [200, 130], [80, 180], [170, 200], [128, 140]];
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < stars.length - 1; i++) {
          ctx.moveTo(stars[i][0], stars[i][1]);
          ctx.lineTo(stars[i+1][0], stars[i+1][1]);
        }
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        stars.forEach(([x, y]) => {
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
        });

        const tex = new THREE.CanvasTexture(canvas);
        const frontMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 });
        const sideMat = new THREE.MeshStandardMaterial({ color: 0x312e81, roughness: 0.5 });
        const torso = new THREE.Mesh(torsoGeo, [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat]);
        root.add(torso);
        break;
      }

      case 'cyberpunk_visor': {
        // Mannequin Head with Cyan Neon Visor
        const head = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 1.2, 1.2),
          new THREE.MeshLambertMaterial({ color: 0x1e293b })
        );
        const visor = new THREE.Mesh(
          new THREE.BoxGeometry(1.35, 0.35, 0.45),
          new THREE.MeshStandardMaterial({
            color: 0x06b6d4,
            emissive: 0x06b6d4,
            emissiveIntensity: 1.0,
            roughness: 0.1
          })
        );
        visor.position.set(0, 0, 0.55);
        const band = new THREE.Mesh(
          new THREE.BoxGeometry(1.38, 0.18, 1.38),
          new THREE.MeshLambertMaterial({ color: 0x0f172a })
        );
        root.add(head, visor, band);
        break;
      }

      case 'supporter_halo':
      case 'halo': {
        // Floating Golden Torus Halo
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(1.1, 0.16, 16, 40),
          new THREE.MeshStandardMaterial({
            color: 0xfacc15,
            emissive: 0xfacc15,
            emissiveIntensity: 0.7,
            metalness: 0.8,
            roughness: 0.2
          })
        );
        ring.rotation.x = Math.PI / 2.3;
        root.add(ring);

        // Core sparkle sphere
        const core = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 16, 16),
          new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        root.add(core);
        break;
      }

      case 'eagle_eye': {
        // Mannequin Head with Brass Recon Goggles
        const head = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 1.2, 1.2),
          new THREE.MeshLambertMaterial({ color: 0x1e293b })
        );
        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(1.3, 0.25, 0.3),
          new THREE.MeshLambertMaterial({ color: 0x78350f })
        );
        frame.position.set(0, 0.05, 0.55);

        const leftLens = new THREE.Mesh(
          new THREE.CylinderGeometry(0.22, 0.22, 0.18, 16),
          new THREE.MeshStandardMaterial({
            color: 0xf59e0b,
            emissive: 0xd97706,
            emissiveIntensity: 0.8,
            metalness: 0.7
          })
        );
        leftLens.rotation.x = Math.PI / 2;
        leftLens.position.set(-0.35, 0.05, 0.7);

        const rightLens = leftLens.clone();
        rightLens.position.x = 0.35;
        root.add(head, frame, leftLens, rightLens);
        break;
      }

      case 'viking_helmet': {
        // Mannequin Head with Horned Helm
        const head = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 1.2, 1.2),
          new THREE.MeshLambertMaterial({ color: 0x1e293b })
        );
        const bowl = new THREE.Mesh(
          new THREE.CylinderGeometry(0.75, 0.75, 0.5, 16),
          new THREE.MeshStandardMaterial({ color: 0x9ca3af, metalness: 0.8, roughness: 0.3 })
        );
        bowl.position.y = 0.75;

        const hornLeft = new THREE.Mesh(
          new THREE.ConeGeometry(0.2, 0.75, 12),
          new THREE.MeshLambertMaterial({ color: 0xfef08a })
        );
        hornLeft.position.set(-0.85, 0.95, 0);
        hornLeft.rotation.z = Math.PI / 4;

        const hornRight = hornLeft.clone();
        hornRight.position.set(0.85, 0.95, 0);
        hornRight.rotation.z = -Math.PI / 4;

        root.add(head, bowl, hornLeft, hornRight);
        break;
      }

      case 'classic_fedora': {
        // Mannequin Head with Charcoal Fedora
        const head = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 1.2, 1.2),
          new THREE.MeshLambertMaterial({ color: 0x1e293b })
        );
        const brim = new THREE.Mesh(
          new THREE.CylinderGeometry(1.3, 1.3, 0.1, 24),
          new THREE.MeshLambertMaterial({ color: 0x1f2937 })
        );
        brim.position.y = 0.65;
        const crown = new THREE.Mesh(
          new THREE.CylinderGeometry(0.75, 0.85, 0.7, 24),
          new THREE.MeshLambertMaterial({ color: 0x111827 })
        );
        crown.position.y = 1.0;
        const ribbon = new THREE.Mesh(
          new THREE.CylinderGeometry(0.86, 0.86, 0.15, 24),
          new THREE.MeshLambertMaterial({ color: 0xd97706 })
        );
        ribbon.position.y = 0.75;
        root.add(head, brim, crown, ribbon);
        break;
      }

      case 'sword': {
        // 3D Genesis Skyblade
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 0.7, 12),
          new THREE.MeshLambertMaterial({ color: 0x78350f })
        );
        const guard = new THREE.Mesh(
          new THREE.BoxGeometry(0.7, 0.12, 0.25),
          new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 })
        );
        guard.position.y = 0.35;
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, 2.2, 0.08),
          new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            emissive: 0x0284c7,
            emissiveIntensity: 0.5,
            metalness: 0.8,
            roughness: 0.2
          })
        );
        blade.position.y = 1.45;
        root.add(handle, guard, blade);
        root.rotation.z = -Math.PI / 4;
        break;
      }

      case 'speed_coil': {
        // 3D Cobalt Speed Coil
        const coil = new THREE.Mesh(
          new THREE.TorusGeometry(0.7, 0.16, 16, 32),
          new THREE.MeshStandardMaterial({
            color: 0x00a2ff,
            emissive: 0x0088ff,
            emissiveIntensity: 0.7,
            metalness: 0.8,
            roughness: 0.2
          })
        );
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 1.2, 12),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6 })
        );
        root.add(handle, coil);
        root.rotation.z = Math.PI / 6;
        break;
      }

      case 'wings': {
        // 3D Aetheric Wings
        const wingMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0ea5e9,
          emissiveIntensity: 0.6,
          metalness: 0.5,
          roughness: 0.3
        });
        const wingL = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 0.08), wingMat);
        wingL.position.set(-0.9, 0, 0);
        wingL.rotation.z = Math.PI / 6;

        const wingR = wingL.clone();
        wingR.position.x = 0.9;
        wingR.rotation.z = -Math.PI / 6;

        const centerJoint = new THREE.Mesh(
          new THREE.BoxGeometry(0.4, 0.4, 0.2),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 })
        );
        root.add(wingL, wingR, centerJoint);
        break;
      }

      case 'axe': {
        // 3D Woodcutter Axe
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 1.8, 12),
          new THREE.MeshLambertMaterial({ color: 0x92400e })
        );
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.65, 0.6, 0.14),
          new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.2 })
        );
        blade.position.set(0.3, 0.65, 0);
        root.add(handle, blade);
        root.rotation.z = -Math.PI / 4;
        break;
      }

      case 'pickaxe': {
        // 3D Diamond Pickaxe
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 1.8, 12),
          new THREE.MeshLambertMaterial({ color: 0x78350f })
        );
        const pickHead = new THREE.Mesh(
          new THREE.BoxGeometry(1.4, 0.18, 0.16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4, metalness: 0.8 })
        );
        pickHead.position.set(0, 0.75, 0);
        root.add(handle, pickHead);
        root.rotation.z = -Math.PI / 4;
        break;
      }

      default: {
        // Fallback cube
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8 })
        );
        root.add(box);
      }
    }

    return root;
  }

  /**
   * Renders a 3D preview of the item directly into a target canvas,
   * complete with smooth interactive mouse-drag/hover rotation.
   */
  public static renderItemToCanvas(canvas: HTMLCanvasElement, itemId: string): void {
    const width = canvas.clientWidth || 160;
    const height = canvas.clientHeight || 140;

    const renderer = this.getRenderer();
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.6, 3.8);

    // Studio lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Subtle dark pedestal
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 1.5, 0.15, 24),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 })
    );
    pedestal.position.y = -1.1;
    scene.add(pedestal);

    // 3D Item
    const itemGroup = this.createItem3DGroup(itemId);
    scene.add(itemGroup);

    // Initial render
    renderer.render(scene, camera);
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      ctx.drawImage(renderer.domElement, 0, 0, canvas.width, canvas.height);
    }

    // Interactive Hover & Auto-spin
    let targetRotY = 0;
    let currentRotY = 0;
    let targetRotX = 0;
    let currentRotX = 0;
    let isHovered = false;
    let animId = 0;

    const renderLoop = () => {
      if (isHovered) {
        targetRotY += 0.015;
      }
      currentRotY += (targetRotY - currentRotY) * 0.1;
      currentRotX += (targetRotX - currentRotX) * 0.1;

      itemGroup.rotation.y = currentRotY;
      itemGroup.rotation.x = currentRotX;

      renderer.render(scene, camera);
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(renderer.domElement, 0, 0, canvas.width, canvas.height);
      }

      if (isHovered || Math.abs(targetRotY - currentRotY) > 0.001 || Math.abs(targetRotX - currentRotX) > 0.001) {
        animId = requestAnimationFrame(renderLoop);
      }
    };

    canvas.parentElement?.addEventListener('mouseenter', () => {
      isHovered = true;
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(renderLoop);
    });

    canvas.parentElement?.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotX = -ny * 0.4;
      targetRotY += nx * 0.05;
    });

    canvas.parentElement?.addEventListener('mouseleave', () => {
      isHovered = false;
      targetRotX = 0;
      targetRotY = 0;
    });
  }

  /**
   * Initializes all shop item 3D canvases in a given container.
   */
  public static renderAllIn(container: HTMLElement): void {
    const canvases = container.querySelectorAll('.rbx-market-3d-canvas') as NodeListOf<HTMLCanvasElement>;
    canvases.forEach((canvas) => {
      const itemId = canvas.getAttribute('data-item-id');
      if (itemId) {
        this.renderItemToCanvas(canvas, itemId);
      }
    });
  }
}
