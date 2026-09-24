import * as THREE from 'three';
import { VoxelAudio } from './VoxelAudio';

export class DayNightCycle {
  private scene: THREE.Scene;
  private sunLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  private audio: VoxelAudio;

  // Celestial meshes
  private sunMesh: THREE.Mesh;
  private moonMesh: THREE.Mesh;
  private celestialGroup: THREE.Group;

  // Cycle time (0 to 1; 0.25 = noon, 0.5 = sunset, 0.75 = midnight, 0.0 = dawn)
  private time: number = 0.25;
  private dayDurationSec: number = 240; // 4 minute full day cycle
  private wasNight: boolean = false;

  // Colors
  private skyNoon = new THREE.Color(0x78c5ef);
  private skyDusk = new THREE.Color(0xd97706);
  private skyNight = new THREE.Color(0x060913);

  public onTimeChange?: (timeStr: string, isNight: boolean) => void;

  constructor(
    scene: THREE.Scene,
    sunLight: THREE.DirectionalLight,
    ambientLight: THREE.AmbientLight,
    audio: VoxelAudio
  ) {
    this.scene = scene;
    this.sunLight = sunLight;
    this.ambientLight = ambientLight;
    this.audio = audio;

    this.celestialGroup = new THREE.Group();
    this.scene.add(this.celestialGroup);

    // Sun Mesh (Luminous warm sphere)
    this.sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(6, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xfff7ed })
    );
    this.sunMesh.position.set(0, 160, 0);
    this.celestialGroup.add(this.sunMesh);

    // Moon Mesh (Pale silver sphere)
    this.moonMesh = new THREE.Mesh(
      new THREE.SphereGeometry(4.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xe0f2fe })
    );
    this.moonMesh.position.set(0, -160, 0);
    this.celestialGroup.add(this.moonMesh);
  }

  public update(deltaSec: number, playerPos: THREE.Vector3): void {
    // Advance time
    this.time = (this.time + deltaSec / this.dayDurationSec) % 1.0;

    // Follow player in X/Z so celestial bodies remain far in the sky
    this.celestialGroup.position.x = playerPos.x;
    this.celestialGroup.position.z = playerPos.z;

    // Celestial angle
    const angle = this.time * Math.PI * 2;
    this.celestialGroup.rotation.z = angle;

    // Determine Sun altitude (-1 to 1)
    const sunAltitude = Math.sin(angle);
    const isNightNow = sunAltitude < 0;

    if (isNightNow !== this.wasNight) {
      this.wasNight = isNightNow;
      this.audio.playChime(isNightNow);
    }

    // Sky and lighting interpolation
    let currentSkyColor: THREE.Color;
    let sunIntensity: number;
    let ambientIntensity: number;

    if (sunAltitude > 0.3) {
      // Full Day
      currentSkyColor = this.skyNoon;
      sunIntensity = 1.3;
      ambientIntensity = 0.65;
    } else if (sunAltitude > 0.0) {
      // Sunset / Dusk
      const t = (0.3 - sunAltitude) / 0.3;
      currentSkyColor = this.skyNoon.clone().lerp(this.skyDusk, t);
      sunIntensity = 1.3 * (1 - t) + 0.3 * t;
      ambientIntensity = 0.65 * (1 - t) + 0.3 * t;
    } else if (sunAltitude > -0.2) {
      // Twilight to Night
      const t = (-sunAltitude) / 0.2;
      currentSkyColor = this.skyDusk.clone().lerp(this.skyNight, t);
      sunIntensity = 0.2 * (1 - t);
      ambientIntensity = 0.3 * (1 - t) + 0.15 * t;
    } else {
      // Deep Night (Moonlight)
      currentSkyColor = this.skyNight;
      sunIntensity = 0.15; // Soft moonlight
      ambientIntensity = 0.18;
    }

    // Update Scene Background & Fog
    this.scene.background = currentSkyColor;
    if (this.scene.fog) {
      this.scene.fog.color = currentSkyColor;
    }

    // Update Lights
    this.sunLight.intensity = sunIntensity;
    this.ambientLight.intensity = ambientIntensity;

    // Sun light position tracks the sun mesh
    const sunWorldPos = new THREE.Vector3();
    this.sunMesh.getWorldPosition(sunWorldPos);
    this.sunLight.position.copy(sunWorldPos);

    if (this.onTimeChange) {
      this.onTimeChange(this.getTimeString(), isNightNow);
    }
  }

  public getTimeString(): string {
    const totalMinutes = Math.floor(this.time * 24 * 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const padH = hours < 10 ? '0' + hours : '' + hours;
    const padM = minutes < 10 ? '0' + minutes : '' + minutes;
    return `${padH}:${padM}`;
  }

  public isNight(): boolean {
    return this.wasNight;
  }

  public destroy(): void {
    this.scene.remove(this.celestialGroup);
  }
}
