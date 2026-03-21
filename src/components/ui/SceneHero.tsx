'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Preload, Box, MeshDistortMaterial, Cone, TorusKnot, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Define a rotating and floating abstract object
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <TorusKnot args={[1.5, 0.4, 128, 32]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#bb9eff" // primary
            emissive="#bb9eff"
            emissiveIntensity={0.5}
            distort={0.3}
            speed={2}
            wireframe
          />
        </TorusKnot>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[-2, 1.5, -1]}>
          <meshStandardMaterial color="#00f1fe" emissive="#00f1fe" emissiveIntensity={0.8} />
        </Box>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <Cone args={[0.4, 0.8, 4]} position={[2, -1.5, 1]} rotation={[0.4, 0.2, 0.8]}>
          <meshStandardMaterial color="#ad89ff" emissive="#ad89ff" emissiveIntensity={0.6} wireframe />
        </Cone>
      </Float>
    </group>
  );
}

export default function SceneHero() {
  return (
    <div className="w-full h-full relative" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00f1fe" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#bb9eff" />

        <Suspense fallback={null}>
          <FloatingShapes />
          {/* Add glowing particles floating around */}
          <Sparkles count={80} scale={10} size={4} speed={0.4} opacity={0.5} color="#00f1fe" />
          <Sparkles count={50} scale={8} size={6} speed={0.2} opacity={0.6} color="#bb9eff" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
