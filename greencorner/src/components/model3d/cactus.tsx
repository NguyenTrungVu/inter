import React from "react";
import { MeshProps } from "@react-three/fiber";

interface BoxProps extends MeshProps {
  // Define additional props if needed
}

const Box: React.FC<BoxProps> = (props) => {
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
};

export default Box;