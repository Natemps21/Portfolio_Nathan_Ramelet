'use client';

import BackgroundClouds from '@/components/ui/BackgroundClouds';
import MouseTrail from '@/components/ui/MouseTrail';
import { useHasFinePointer, usePrefersReducedMotion } from '@/hooks/useDevicePerformance';

export default function BackgroundEffects() {
  const reducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useHasFinePointer();

  if (reducedMotion) return null;

  return (
    <>
      <BackgroundClouds />
      {hasFinePointer && <MouseTrail />}
    </>
  );
}
