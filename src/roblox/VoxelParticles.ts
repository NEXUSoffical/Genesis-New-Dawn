import * as THREE from 'three';

interface VoxelParticle {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  rotVel: THREE.Vector3;
  life: number;
  maxLife: number;
}

export class VoxelParticles {
  private scene: THREE.Scene;
  private particles: VoxelParticle[] = [];
  private geoCache: THREE.BoxGeometry;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.geoCache = new THREE.BoxGeometry(0.35, 0.35, 0.35);
  }

  /**
   * Spawns a burst of tumbling mini block chunks at (x, y, z)
   */
  public spawnBreakBurst(pos: THREE.Vector3, color: number): void {
    const count = 12;
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshLambertMaterial({
        color,
        transparent: true,
        opacity: 0.95
      });
      const mesh = new THREE.Mesh(this.geoCache, mat);

      // Jitter spawn location inside the block bounds
      mesh.position.set(
        pos.x + (Math.random() - 0.5) * 1.2,
        pos.y + (Math.random() - 0.5) * 1.2,
        pos.z + (Math.random() - 0.5) * 1.2
      );

      // Random burst velocity
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 7,
        Math.random() * 5 + 3,
        (Math.random() - 0.5) * 7
      );

      // Tumble angular velocity
      const rotVel = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );

      this.scene.add(mesh);

      this.particles.push({
        mesh,
        vel,
        rotVel,
        life: 0,
        maxLife: 0.55 + Math.random() * 0.25
      });
    }
  }

  public update(deltaSec: number): void {
    const gravity = -24;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += deltaSec;

      if (p.life >= p.maxLife) {
        this.scene.remove(p.mesh);
        (p.mesh.material as THREE.Material).dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // Physics
      p.vel.y += gravity * deltaSec;
      p.mesh.position.addScaledVector(p.vel, deltaSec);

      p.mesh.rotation.x += p.rotVel.x * deltaSec;
      p.mesh.rotation.y += p.rotVel.y * deltaSec;
      p.mesh.rotation.z += p.rotVel.z * deltaSec;

      // Shrink towards end of life
      const progress = p.life / p.maxLife;
      const scale = Math.max(0.01, 1 - progress);
      p.mesh.scale.set(scale, scale, scale);
    }
  }

  public clear(): void {
    this.particles.forEach((p) => {
      this.scene.remove(p.mesh);
      (p.mesh.material as THREE.Material).dispose();
    });
    this.particles = [];
  }
}
