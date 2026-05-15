'use client';

import { useEffect, useRef } from 'react';

function getStarCounts() {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
  if (w < 640) return { moving: 50, twinkle: 20 };
  if (w < 1024) return { moving: 80, twinkle: 35 };
  return { moving: 100, twinkle: 40 };
}

export default function SimpleStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true,
    });
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const { moving: starCount, twinkle: twinkleCount } = getStarCounts();

    let logicalW = window.innerWidth;
    let logicalH = window.innerHeight;

    const resizeCanvas = () => {
      logicalW = window.innerWidth;
      logicalH = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(logicalW * dpr);
      canvas.height = Math.floor(logicalH * dpr);
      canvas.style.width = `${logicalW}px`;
      canvas.style.height = `${logicalH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * logicalW,
        y: Math.random() * logicalH,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
      });
    }

    const twinkleStars: {
      x: number;
      y: number;
      size: number;
      phase: number;
      speed: number;
    }[] = [];

    for (let i = 0; i < twinkleCount; i++) {
      twinkleStars.push({
        x: Math.random() * logicalW,
        y: Math.random() * logicalH,
        size: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.004 + 0.002,
      });
    }

    let animationId = 0;
    let time = 0;
    let isVisible = !document.hidden;
    let isPaused = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const drawFrame = (scrolling: boolean) => {
      ctx.fillStyle = scrolling ? '#000000' : 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, logicalW, logicalH);

      stars.forEach((star) => {
        if (!scrolling) {
          star.x += star.speedX;
          star.y += star.speedY;
          if (star.x < 0) star.x = logicalW;
          if (star.x > logicalW) star.x = 0;
          if (star.y < 0) star.y = logicalH;
          if (star.y > logicalH) star.y = 0;
        }
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      if (!scrolling) {
        twinkleStars.forEach((star) => {
          const opacity = (Math.sin(time * star.speed + star.phase) + 1) / 2;
          ctx.fillStyle = `rgba(160, 140, 230, ${opacity * 0.35 + 0.2})`;
          ctx.fillRect(star.x, star.y, star.size, star.size);
        });
      }
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible || isPaused) return;
      time += 0.016;
      drawFrame(false);
    };

    const pauseForScroll = () => {
      if (!isPaused) {
        isPaused = true;
        drawFrame(true);
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isPaused = false;
      }, 150);
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('scroll', pauseForScroll, { passive: true });

    if (reducedMotion) {
      drawFrame(true);
    } else {
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', pauseForScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
      clearTimeout(scrollTimeout);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-black"
      style={{ pointerEvents: 'none' }}
    />
  );
}
