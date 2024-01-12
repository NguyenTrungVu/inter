import React from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three-orbitcontrols-ts";

// Extend the JSX.IntrinsicElements type to include orbitControls
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: any;
    }
  }
}

extend({ OrbitControls });

interface ControlsProps {}

const Controls: React.FC<ControlsProps> = () => {
  const { camera, gl } = useThree();
  return <orbitControls attach="orbitControls" args={[camera, gl.domElement]} />;
};

export default Controls;