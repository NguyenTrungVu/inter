import React from "react";
import { MeshProps } from "@react-three/fiber";

interface BoxProps extends MeshProps {
    // Define additional props if needed
  }
  
  const LightB: React.FC<BoxProps> = (props) => {
    return (
        <mesh {...props} >
        <pointLight castShadow />
        <sphereBufferGeometry args={[0.2, 30, 10]} />
        <meshPhongMaterial emissive={"yellow"}  />
      </mesh>
    );
  };
  
  export default LightB;