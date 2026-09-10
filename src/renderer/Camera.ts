export class Camera {
  public x: number = 0; // World coords (tile units)
  public y: number = 0;
  public zoom: number = 1.6;
  public targetZoom: number = 1.6;
  public followTarget?: { x: number; y: number; name?: string };

  public isDragging: boolean = false;
  private lastMouseX: number = 0;
  private lastMouseY: number = 0;

  constructor(public canvas: HTMLCanvasElement) {
    this.setupListeners();
  }

  private setupListeners(): void {
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      this.targetZoom = Math.max(0.6, Math.min(3.5, this.targetZoom * zoomFactor));
    }, { passive: false });

    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0 || e.button === 1) {
        this.isDragging = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        // Break follow when user drags manually
        this.followTarget = undefined;
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const dx = (e.clientX - this.lastMouseX) / (32 * this.zoom);
        const dy = (e.clientY - this.lastMouseY) / (32 * this.zoom);
        this.x -= dx;
        this.y -= dy;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch support for mobile / trackpads
    let initialPinchDist = 0;
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
        this.followTarget = undefined;
      } else if (e.touches.length === 2) {
        initialPinchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    });

    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && this.isDragging) {
        const dx = (e.touches[0].clientX - this.lastMouseX) / (32 * this.zoom);
        const dy = (e.touches[0].clientY - this.lastMouseY) / (32 * this.zoom);
        this.x -= dx;
        this.y -= dy;
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (initialPinchDist > 0) {
          const factor = dist / initialPinchDist;
          this.targetZoom = Math.max(0.6, Math.min(3.5, this.targetZoom * factor));
          initialPinchDist = dist;
        }
      }
    });

    this.canvas.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  public update(deltaSec: number): void {
    // Smooth zoom interpolation
    this.zoom += (this.targetZoom - this.zoom) * Math.min(1, deltaSec * 10);

    // Camera follow lerp
    if (this.followTarget) {
      const targetX = this.followTarget.x;
      const targetY = this.followTarget.y;
      this.x += (targetX - this.x) * Math.min(1, deltaSec * 5);
      this.y += (targetY - this.y) * Math.min(1, deltaSec * 5);
    }
  }

  public worldToScreen(worldX: number, worldY: number, tileSize: number): { x: number; y: number } {
    const screenCenterX = this.canvas.width / 2;
    const screenCenterY = this.canvas.height / 2;

    const screenX = screenCenterX + (worldX - this.x) * tileSize * this.zoom;
    const screenY = screenCenterY + (worldY - this.y) * tileSize * this.zoom;

    return { x: screenX, y: screenY };
  }

  public screenToWorld(screenX: number, screenY: number, tileSize: number): { x: number; y: number } {
    const screenCenterX = this.canvas.width / 2;
    const screenCenterY = this.canvas.height / 2;

    const worldX = this.x + (screenX - screenCenterX) / (tileSize * this.zoom);
    const worldY = this.y + (screenY - screenCenterY) / (tileSize * this.zoom);

    return { x: worldX, y: worldY };
  }

  public panTo(worldX: number, worldY: number): void {
    this.followTarget = undefined;
    this.x = worldX;
    this.y = worldY;
  }
}
