"use client";

import { experiences } from "@/data/portfolio";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef, useState, useMemo } from "react";
import * as THREE from "three";

function ExperienceOrb({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1 : 0.5}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.8}
          speed={2}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function TechParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#bb9eff" transparent opacity={0.6} />
    </points>
  );
}

function ExperienceScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00f1fe" />

      <TechParticles />

      <ExperienceOrb position={[-3, 1, 0]} color="#bb9eff" />
      <ExperienceOrb position={[3.5, -1, 0]} color="#00f1fe" />
      <ExperienceOrb position={[0, 0, -2]} color="#ffb366" />
      <ExperienceOrb position={[-1.5, -1.5, 1]} color="#bb9eff" />
      <ExperienceOrb position={[3, 1.5, 1]} color="#00f1fe" />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-18 relative overflow-hidden"
    >
      <div className="section-aura" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ExperienceScene />
          </Suspense>
        </Canvas>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-30 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Professional{" "}
            <span style={{ color: "var(--color-secondary)" }}>Trajectory</span>
          </h2>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Tracing professional growth across varied tech domains
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical spine */}
          <div
            className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 h-full w-px neon-spine"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={exp.company}
                className="relative mb-12 sm:mb-16 md:mb-20"
              >
                <div
                  className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-4 sm:gap-6 md:gap-8`}
                >
                  {/* Content side */}
                  <div
                    className={`flex-1 pl-12 sm:pl-16 md:pl-0 ${isLeft ? "md:text-right" : "md:text-left"}`}
                  >
                    <span
                      className="font-mono text-xs sm:text-sm tracking-widest uppercase"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">
                      {exp.company}
                    </h3>
                    <p
                      className="font-medium mb-3 sm:mb-4 uppercase text-xs tracking-widest"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {exp.role}
                    </p>
                    <ul
                      className={`text-xs sm:text-sm space-y-1.5 sm:space-y-2 list-none ${isLeft ? "md:text-right" : ""}`}
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {exp.tasks.map((task) => (
                        <li key={task}>• {task}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 sm:left-2 md:relative md:left-auto z-10 flex items-center justify-center rounded-full border-4 ${
                      exp.isCurrent
                        ? "w-10 h-10 sm:w-12 sm:h-12"
                        : "w-8 h-8 sm:w-10 sm:h-10"
                    }`}
                    style={{
                      background: "var(--color-surface)",
                      borderColor: exp.isCurrent
                        ? "var(--color-secondary)"
                        : "var(--color-outline-variant)",
                      boxShadow: exp.isCurrent
                        ? "0 0 25px rgba(0,241,254,0.6)"
                        : "none",
                    }}
                  >
                    {exp.isCurrent ? (
                      <span
                        className="material-symbols-outlined text-lg sm:text-xl"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        work
                      </span>
                    ) : (
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                        style={{
                          background: "var(--color-on-surface-variant)",
                        }}
                      />
                    )}
                  </div>

                  {/* Empty col for layout balance */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
