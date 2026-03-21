'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function ImagePlane({ src }: { src: string }) {
  const texture = useLoader(THREE.TextureLoader, src);
  const meshRef = useRef<THREE.Mesh>(null);

  // Subtle breathing scale effect
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.02;
      meshRef.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <Float rotationIntensity={0.2} floatIntensity={1.5} floatingRange={[-0.1, 0.1]} speed={2}>
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.3, 0.3]}
      >
        <mesh ref={meshRef}>
          {/* Adjust args closer to the aspect ratio of your image, 4x4 is a good square base */}
          <planeGeometry args={[4.5, 4.5]} />
          <meshBasicMaterial map={texture} transparent={true} />
        </mesh>
      </PresentationControls>
    </Float>
  );
}

export default function ThreeAnimImage({ src }: { src: string }) {
  return (
    <div className="w-full h-full relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <ImagePlane src={src} />
        </Suspense>
      </Canvas>
    </div>
  );
}
