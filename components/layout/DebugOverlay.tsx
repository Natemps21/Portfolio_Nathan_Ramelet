'use client';

// Composant de débogage temporaire pour vérifier que le HTML s'affiche

export default function DebugOverlay() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none">
      <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-lg shadow-2xl border-4 border-green-500">
        <p className="text-black text-2xl font-bold text-center">
          ✅ HTML VISIBLE
        </p>
        <p className="text-gray-600 text-sm text-center mt-2">
          Si vous voyez ceci, le problème vient du z-index
        </p>
      </div>
    </div>
  );
}













