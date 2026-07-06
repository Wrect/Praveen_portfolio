import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MechanicalPart() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* An intricate torus knot representing a complex CAD sweep */}
        <torusKnotGeometry args={[1, 0.3, 256, 32]} />
        <meshStandardMaterial 
          color="#a8b2c1" 
          metalness={0.9} 
          roughness={0.2} 
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeModelViewer() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-card cursor-move rounded-lg overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10 bg-background/50 backdrop-blur-md px-3 py-1 rounded-full border border-border/50 text-xs font-semibold text-foreground/70">
        Interactive WebGL
      </div>
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={["transparent"]} />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Stage environment="city" intensity={0.5} castShadow={false}>
          <MechanicalPart />
        </Stage>
        
        <OrbitControls 
          enableZoom={true} 
          autoRotate={true}
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
