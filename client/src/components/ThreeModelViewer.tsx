import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, Environment, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

function STLModel({ url }: { url: string }) {
  const geom = useLoader(STLLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} geometry={geom} castShadow receiveShadow>
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

export default function ThreeModelViewer({ modelUrl }: { modelUrl?: string }) {
  const url = modelUrl || `${import.meta.env.BASE_URL}models/1.STL`;
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-card cursor-move rounded-lg overflow-hidden relative" style={{ touchAction: 'none' }}>
      <div className="absolute top-4 left-4 z-10 bg-background/50 backdrop-blur-md px-3 py-1 rounded-full border border-border/50 text-xs font-semibold text-foreground/70 pointer-events-none">
        Interactive WebGL
      </div>
      <Canvas shadows camera={{ position: [0, 0, 100], fov: 45 }}>
        <color attach="background" args={["transparent"]} />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} castShadow={false} adjustCamera>
            <STLModel url={url} />
          </Stage>
        </Suspense>
        
        <OrbitControls 
          enableZoom={true} 
          autoRotate={true}
          autoRotateSpeed={1.5}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
