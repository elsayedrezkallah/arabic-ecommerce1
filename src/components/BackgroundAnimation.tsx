import React, { useRef, memo, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Memoized particle component for better performance
const FloatingParticles = memo(() => {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05; // Reduced speed
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025; // Reduced speed
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.3; // Reduced movement
    }
  });

  // Reduced particle count for better performance
  const points = useMemo(() => {
    const temp = new Float32Array(500); // Reduced from 2000 to 500
    for (let i = 0; i < 500; i++) {
      temp[i] = (Math.random() - 0.5) * 15; // Reduced spread
    }
    return temp;
  }, []);

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.05} // Slightly larger for better visibility with fewer particles
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3} // Reduced opacity
      />
    </Points>
  );
});

FloatingParticles.displayName = 'FloatingParticles';

// Memoized orbs component for better performance
const FloatingOrbs = memo(() => {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orb1Ref.current) {
      orb1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 1; // Reduced movement
      orb1Ref.current.rotation.y += 0.005; // Reduced rotation speed
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2 + 2) * 0.8; // Reduced movement
      orb2Ref.current.rotation.x += 0.01; // Reduced rotation speed
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[-3, 0, -8]}>
        <sphereGeometry args={[0.4, 16, 16]} /> {/* Reduced geometry complexity */}
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.08} />
      </mesh>
      <mesh ref={orb2Ref} position={[3, 0, -10]}>
        <sphereGeometry args={[0.3, 16, 16]} /> {/* Reduced geometry complexity */}
        <meshBasicMaterial color="#CD7F32" transparent opacity={0.06} />
      </mesh>
    </>
  );
});

FloatingOrbs.displayName = 'FloatingOrbs';

// Memoized background animation component
const BackgroundAnimation: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]} // Limit device pixel ratio for better performance
        performance={{ min: 0.5 }} // Reduce quality when performance is low
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.15} color="#D4AF37" />
        <FloatingParticles />
        <FloatingOrbs />
      </Canvas>
      
      {/* Simplified CSS animations - reduced number of elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-arabic-gold/6 to-transparent rounded-full animate-pulse floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-luxury-gold-400/4 to-transparent rounded-full animate-pulse delay-1000 floating-element"></div>
      </div>
    </div>
  );
});

BackgroundAnimation.displayName = 'BackgroundAnimation';

export default BackgroundAnimation;
