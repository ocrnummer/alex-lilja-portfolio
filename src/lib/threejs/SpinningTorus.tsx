import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PRIMARY_COLOR } from '../../utils/SharedConsts';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function SpinningTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  // Rotation in radians per second, scaled by frame time so speed is the same at any refresh rate
  useFrame((_, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.018 * delta;
      torusRef.current.rotation.x += 0.006 * delta;
    }
  });

  return (
    <mesh 
      ref={torusRef} 
      position={[-300, 100, -750]}
      rotation={[123, 0, 0]}
    >
      <torusGeometry args={[600, 200, 96, 200]} />
      <meshBasicMaterial color={PRIMARY_COLOR} toneMapped={false}/>
    </mesh>
  );
}

export default function TorusScene() {
  return (
    <Canvas 
      camera={{ position: [10, 10, 10], fov: 50 }}
      // Cap pixel ratio at 2 so high-density phone screens don't render at 3x
      dpr={[1, 2]}
      // Render a single still frame when the visitor has asked for reduced motion
      frameloop={prefersReducedMotion ? 'demand' : 'always'}
    >
      <SpinningTorus />
    </Canvas>
  );
}