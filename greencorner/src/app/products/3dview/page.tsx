
import { Canvas } from "@react-three/fiber";
import Viewen from "@/components/model3d/view"
import LightB from "@/components/ui/light";
import Box from "@/components/model3d/cactus";
import OrbitControl from "@/components/model3d/orbitcontrol"

export default function Home() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        className="bg-inherit"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <LightB position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        <OrbitControl/>
        <Viewen position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
