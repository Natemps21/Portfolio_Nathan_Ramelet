'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useGalaxyStore } from '@/lib/stores/galaxyStore';

export default function Nebula() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { speed, isActive } = useGalaxyStore();

  // Create custom shader material for nebula effect
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color('#000000') }, // Pure Black
      color2: { value: new THREE.Color('#1a0520') }, // Very subtle violet
      color3: { value: new THREE.Color('#0a0515') }, // Very dark blue
      color4: { value: new THREE.Color('#150510') }, // Very dark pink
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      uniform vec3 color4;
      
      varying vec2 vUv;
      varying vec3 vPosition;
      
      // Simplex noise function (simplified)
      float noise(vec3 p) {
        return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
      }
      
      void main() {
        // Create flowing diagonal pattern
        vec2 uv = vUv;
        float diagonal = (uv.x + uv.y) * 0.5;
        
        // Animated noise
        float n1 = noise(vPosition * 0.5 + time * 0.1);
        float n2 = noise(vPosition * 0.3 - time * 0.05);
        float n3 = noise(vPosition * 0.7 + time * 0.15);
        
        // Mix colors - un peu plus visible
        vec3 color = mix(color1, color2, diagonal * 0.4 + n1 * 0.2);
        color = mix(color, color3, n2 * 0.25);
        color = mix(color, color4, n3 * 0.25);
        
        // Add subtle glow at specific areas (galaxies)
        float distFromCenter = length(uv - 0.5);
        float galaxyGlow = smoothstep(0.5, 0.15, distFromCenter) * 0.3;
        
        // Add pink and blue touches for galaxies
        color += vec3(0.5, 0.15, 0.4) * galaxyGlow * n1; // Pink touch
        color += vec3(0.15, 0.3, 0.6) * galaxyGlow * n2; // Blue touch
        
        // Opacité augmentée pour visibilité
        float alpha = 0.12 + n1 * 0.08;
        
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });

  useFrame((state) => {
    if (meshRef.current) {
      // Animation très légère et espacée
      const time = Math.floor(state.clock.elapsedTime * 2) / 2; // Update tous les 0.5s
      shaderMaterial.uniforms.time.value = time;
    }
  });

  return (
    <Sphere ref={meshRef} args={[20, 64, 64]} material={shaderMaterial} />
  );
}

