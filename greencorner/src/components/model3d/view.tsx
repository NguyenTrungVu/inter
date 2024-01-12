import React from "react";


interface CactusProps {
  // Define your props here
  // For example:
  position: [number, number, number];
}

const Viewen: React.FC<CactusProps> = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default Viewen;