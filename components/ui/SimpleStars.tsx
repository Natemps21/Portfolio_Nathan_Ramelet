'use client';

import { useEffect, useRef, useState } from 'react';

export default function SimpleStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Scroll listener pour zoom - prolongé
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
      // Zoom progressif basé sur le scroll (max 2.5x, nécessite beaucoup plus de scroll)
      const newZoom = 1 + Math.min(scrollY / 10000, 1.5); // 10000px de scroll pour zoom max 2.5x
      setZoom(newZoom);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Create moving stars - blanches
    const stars: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
      });
    }

    // Create twinkling stars - violet/bleu statiques, discrètes
    const twinkleStars: { 
      x: number; 
      y: number; 
      size: number; 
      baseColor: 'violet' | 'bleu';
      colorPhase: number; // Pour changement de couleur lent
      phase: number; // Pour scintillement
      speed: number; // Vitesse de scintillement (lent)
      colorSpeed: number; // Vitesse de changement de couleur (très lent)
    }[] = [];
    const twinkleCount = 80;

    for (let i = 0; i < twinkleCount; i++) {
      twinkleStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.5 + 0.3, // 0.3-0.8px (plus discrètes)
        baseColor: Math.random() > 0.5 ? 'violet' : 'bleu',
        colorPhase: Math.random() * Math.PI * 2, // Phase aléatoire pour couleur
        phase: Math.random() * Math.PI * 2, // Phase aléatoire pour scintillement
        speed: Math.random() * 0.005 + 0.003, // 0.003-0.008 (scintillement très lent)
        colorSpeed: Math.random() * 0.001 + 0.0005, // 0.0005-0.0015 (changement couleur très lent)
      });
    }

    // Animation
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.016; // ~60fps
      // Augmentation de l'opacité pour estomper plus rapidement les traces
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; // 0.25 au lieu de 0.1 pour estomper plus vite
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw moving white stars
      stars.forEach((star) => {
        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      // Draw twinkling colored stars - discrètes avec changement de couleur lent
      twinkleStars.forEach((star) => {
        // Calculate opacity with sine wave for smooth slow twinkling
        const opacity = (Math.sin(time * star.speed + star.phase) + 1) / 2; // 0-1
        const finalOpacity = opacity * 0.4 + 0.15; // 0.15-0.55 (plus discret)

        // Calculate color transition between violet and blue (slow)
        const colorMix = (Math.sin(time * star.colorSpeed + star.colorPhase) + 1) / 2; // 0-1
        // 0 = violet pur, 1 = bleu pur
        const r = Math.round(139 + (74 - 139) * colorMix);   // 139 → 74
        const g = Math.round(92 + (144 - 92) * colorMix);   // 92 → 144
        const b = Math.round(246 + (226 - 246) * colorMix); // 246 → 226
        const currentColor = `${r}, ${g}, ${b}`;

        // Draw glow - plus petit et discret
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2 // Glow plus petit
        );
        gradient.addColorStop(0, `rgba(${currentColor}, ${finalOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${currentColor}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw star core - très discret
        ctx.fillStyle = `rgba(${currentColor}, ${finalOpacity * 0.8})`;
        ctx.fillRect(star.x - star.size / 2, star.y - star.size / 2, star.size, star.size);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-black"
      style={{ 
        pointerEvents: 'none',
        transform: `scale(${zoom})`,
        transformOrigin: 'center center',
        transition: 'transform 0.3s ease-out',
      }}
    />
  );
}

