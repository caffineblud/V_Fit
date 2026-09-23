"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { VRButton, XR, Controllers } from "@react-three/xr";
import { useRef } from "react";
import * as THREE from "three";
import type { Exercise } from "@/data/exercises";

function PlaceholderModel({ exercise }: { exercise: Exercise }) {
  const ref = useRef<THREE.Mesh>(null);

  // Swap this whole component out for a <primitive object={gltf.scene} />
  // once real rigged models exist — the rest of the app doesn't need to change.
  return (
    <mesh ref={ref} castShadow receiveShadow>
      {exercise.modelShape === "capsule" && (
        <capsuleGeometry args={[0.5, 1.4, 8, 16]} />
      )}
      {exercise.modelShape === "box" && <boxGeometry args={[1.2, 0.5, 2]} />}
      {exercise.modelShape === "sphere" && <sphereGeometry args={[0.8, 32, 32]} />}
      <meshStandardMaterial
        color={exercise.accentHex}
        wireframe={false}
        roughness={0.35}
        metalness={0.2}
      />
    </mesh>
  );
}

export default function ExerciseViewer({ exercise }: { exercise: Exercise }) {
  return (
    <div className="relative h-full w-full">
      <VRButton
        className="!absolute !bottom-4 !left-1/2 !-translate-x-1/2 !rounded-full !border !border-signal !bg-panel !px-5 !py-2 !text-sm !text-signal"
      />
      <Canvas camera={{ position: [0, 1.2, 3.2], fov: 45 }} shadows>
        <XR>
          <Controllers />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[3, 5, 2]}
            intensity={1.1}
            castShadow
          />
          <Environment preset="city" />
          <PlaceholderModel exercise={exercise} />
          <gridHelper args={[10, 20, "#232A35", "#161B22"]} />
          <OrbitControls
            enablePan={false}
            minDistance={1.5}
            maxDistance={6}
            target={[0, 0.7, 0]}
          />
        </XR>
      </Canvas>
    </div>
  );
}
