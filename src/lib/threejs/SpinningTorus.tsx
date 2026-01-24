import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SpinningTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.0006;
      torusRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <mesh 
      ref={torusRef} 
      position={[-300, 100, -750]}
      rotation={[123, 0, 0]}
    >
      <torusGeometry args={[600, 200, 300, 200]} />
      <meshBasicMaterial color="#FFD8BB" toneMapped={false}/>
    </mesh>
  );
}

export default function TorusScene() {
  return (
    <Canvas 
      camera={{ position: [10, 10, 10], fov: 50 }}
    >
      <SpinningTorus />
    </Canvas>
  );
}