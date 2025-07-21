'use client';

import { useEffect, useRef } from 'react';
import { TextWelcome } from '@/components/landing';
import { Aboutmyselft } from '@/components/Aboutme';
import MarioGame from './game/lib/Game';
export default function Home() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameRef.current) {
      const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 300,
  backgroundColor: '#000000',
  parent: 'game-container',
  scene: MarioGame, 
};

      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return (
    <div className="cyber-grid min-h-screen flex flex-col items-center gap-10 py-10">
      <TextWelcome />

      {/* 🎮 ตำแหน่งเกม */}
      <div id="game-container" className="border-4 border-white rounded-lg shadow-lg" />

      <Aboutmyselft />
    </div>
  );
}
