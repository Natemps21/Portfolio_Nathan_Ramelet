'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { useMenuStore } from '@/lib/stores/menuStore';
import { useGalaxyStore } from '@/lib/stores/galaxyStore';

interface MenuItemProps {
  label: string;
  angle: number;
  radius: number;
  onClick: () => void;
}

function MenuItem({ label, angle, radius, onClick }: MenuItemProps) {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <Html position={[x, y, 0]} center>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.1 }}
        onClick={onClick}
        className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:border-nebula-cyan transition-all shadow-lg"
      >
        {label}
      </motion.button>
    </Html>
  );
}

function Sun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { isExpanded } = useMenuStore();
  const { setActive } = useGalaxyStore();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Pulsating animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(hovered ? scale * 1.2 : scale);

      // Slow rotation
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        onPointerOver={() => {
          setHovered(true);
          setActive(true);
        }}
        onPointerOut={() => {
          setHovered(false);
          if (!isExpanded) setActive(false);
        }}
      >
        <meshStandardMaterial
          color="#fdb813"
          emissive="#ff8800"
          emissiveIntensity={2}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>

      {/* Glow ring */}
      <mesh scale={hovered ? 1.5 : 1.3}>
        <ringGeometry args={[1, 1.2, 64]} />
        <meshBasicMaterial
          color="#fdb813"
          transparent
          opacity={hovered ? 0.3 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Point light for glow effect */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#fdb813" distance={10} />
    </>
  );
}

export default function SunNavigation() {
  const { isExpanded, setExpanded, setActiveSection } = useMenuStore();
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { label: 'Mon Parcours', section: 'journey' },
    { label: 'Projets', section: 'projects' },
    { label: 'CV', section: 'cv' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleItemClick = (section: string) => {
    setActiveSection(section);
    setExpanded(false);
    setShowMenu(false);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-96 h-96 pointer-events-none"
      onMouseEnter={() => {
        setShowMenu(true);
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setShowMenu(false);
        setExpanded(false);
      }}
    >
      <div className="w-full h-full pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Sun />
          
          <AnimatePresence>
            {showMenu && menuItems.map((item, index) => {
              const angle = (index / menuItems.length) * Math.PI * 2;
              return (
                <MenuItem
                  key={item.section}
                  label={item.label}
                  angle={angle}
                  radius={2.5}
                  onClick={() => handleItemClick(item.section)}
                />
              );
            })}
          </AnimatePresence>
        </Canvas>
      </div>

      {/* Bottom text hint */}
      <AnimatePresence>
        {!showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none"
          >
            <p className="text-white/50 text-xs font-light">Navigation</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

