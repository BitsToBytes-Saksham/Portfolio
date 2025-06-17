import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

function RoomModel(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const curtainMaterial = new THREE.MeshPhongMaterial({ color: "#d90429" });
  const bodyMaterial = new THREE.MeshPhongMaterial({ map: matcapTexture });
  const tableMaterial = new THREE.MeshPhongMaterial({ color: "#582f0e" });
  const radiatorMaterial = new THREE.MeshPhongMaterial({ color: "#fff" });
  const compMaterial = new THREE.MeshStandardMaterial({ color: "#fff" });
  const pillowMaterial = new THREE.MeshPhongMaterial({ color: "#8338ec" });
  const chairMaterial = new THREE.MeshPhongMaterial({ color: "#000" });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      {/* Commented out invalid node to prevent crash */}
      {/* <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} /> */}

      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh ref={screensRef} geometry={nodes.emis_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.handls_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.kovrik_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.lamp_white_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0001.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.railing_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.red_vac_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.stylus_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.tablet_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.triangle_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vac_black_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vacuum1_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vacuumgrey_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.vires_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");

export default function HeroSection() {
  return (
    <section className="h-screen w-full">
      <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }} shadows>
        <color attach="background" args={["#0f0f0f"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 4]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <RoomModel />
        </Suspense>
      </Canvas>
    </section>
  );
}