import { create } from 'zustand';
import { GalaxyState } from '@/types';

export const useGalaxyStore = create<GalaxyState>((set) => ({
  speed: 1,
  rotation: 0,
  zoomLevel: 1,
  isActive: false,
  mousePosition: { x: 0, y: 0 },
  
  setSpeed: (speed) => set({ speed }),
  setRotation: (rotation) => set({ rotation }),
  setZoomLevel: (zoomLevel) => set({ zoomLevel }),
  setActive: (isActive) => set({ isActive }),
  setMousePosition: (mousePosition) => set({ mousePosition }),
}));
















