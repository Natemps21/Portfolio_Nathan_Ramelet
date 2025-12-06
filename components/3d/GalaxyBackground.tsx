'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { useGalaxyStore } from '@/lib/stores/galaxyStore';
import Stars from './Stars';
import Nebula from './Nebula';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <Stars />
      {/* Nébuleuse désactivée pour performance */}
      
      {/* Post-processing minimal */}
      <EffectComposer>
        <Bloom
          intensity={0.4}
          luminanceThreshold={0.95}
          luminanceSmoothing={0.9}
          height={100}
        />
      </EffectComposer>
    </>
  );
}

export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{ 
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        dpr={1}
        style={{ background: '#000000' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

