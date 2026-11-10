import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Futuristic Core with Distort Shader & Cyber Aura
function CyberCore({ mousePos }) {
  const meshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    
    // Core rotation + subtle mouse parallax
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2 + mousePos.current.y * 0.5;
      meshRef.current.rotation.y = t * 0.4 + mousePos.current.x * 0.5;
    }

    // Outer orbital rings
    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.6;
      ringRef1.current.rotation.y = t * 0.3;
      ringRef1.current.rotation.z = Math.sin(t * 0.5) * 0.4;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x = -t * 0.4;
      ringRef2.current.rotation.y = Math.cos(t * 0.4) * 0.5;
      ringRef2.current.rotation.z = -t * 0.5;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.2;
      wireframeRef.current.rotation.y = -t * 0.35;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Glass / Cyber Distorted Sphere */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#4f46e5"
            attach="material"
            distort={0.42}
            speed={2}
            roughness={0.15}
            metalness={0.85}
            emissive="#1e1b4b"
            emissiveIntensity={0.6}
            wireframe={false}
          />
        </Sphere>
      </Float>

      {/* Wireframe outer crystal */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[2.0, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.35}
            emissive="#06b6d4"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      {/* Outer Gyroscopic Quantum Rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.5, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>

      <mesh ref={ringRef2}>
        <torusGeometry args={[2.9, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={1}
          wireframe
        />
      </mesh>
    </group>
  );
}

// Particle Constellation Field
function ParticleField({ count = 450 }) {
  const points = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#818cf8'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#c084fc'),
      new THREE.Color('#34d399')
    ];

    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Orbiting Tech Badges in 3D Space
function FloatingOrbs() {
  const groupRef = useRef();

  const orbs = useMemo(() => [
    { label: "React", pos: [2.8, 1.4, 0.5], color: "#61DAFB" },
    { label: "Three.js", pos: [-2.6, 1.2, 0.8], color: "#A855F7" },
    { label: "LeetCode 350+", pos: [2.4, -1.5, 0.6], color: "#10B981" },
    { label: "C++ / Java", pos: [-2.7, -1.3, -0.4], color: "#F59E0B" },
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <group key={i} position={orb.pos}>
          <mesh>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Hero3D() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mousePos.current = {
      x: (clientX / innerWidth - 0.5) * 1.5,
      y: -(clientY / innerHeight - 0.5) * 1.5,
    };
  };

  return (
    <div
      className="w-full h-full min-h-[500px] lg:min-h-[640px] relative pointer-events-auto"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#818cf8" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#06b6d4" />
        <pointLight position={[0, 5, 2]} intensity={2.5} color="#ec4899" />

        <Stars radius={40} depth={40} count={1200} factor={3} saturation={0.8} fade speed={1.5} />
        
        <CyberCore mousePos={mousePos} />
        <FloatingOrbs />
        <ParticleField count={400} />
      </Canvas>

      {/* Floating 3D Interaction Prompt Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-xs text-slate-300 pointer-events-none shadow-xl">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>Interactive 3D WebGL Mesh • Drag / Move Cursor</span>
      </div>
    </div>
  );
}

