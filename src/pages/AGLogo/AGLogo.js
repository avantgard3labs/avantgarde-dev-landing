import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef, useState, useEffect } from "react";
import Logo from "./ag_3d_logo.glb";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";

const AGLogo = () => {
    const Model = () => {
        const group = useRef();
        const [targetRotation, setTargetRotation] = useState([0, 0, 0]);
        const [currentRotation, setCurrentRotation] = useState([0, 0, 0]);

        const gltf = useLoader(GLTFLoader, Logo);

        useFrame(({ mouse }) => {
            setTargetRotation([
                (mouse.y * Math.PI) / 8,
                (mouse.x * Math.PI) / 8,
                0,
            ]);
        });

        useEffect(() => {
            const updateRotation = () => {
                setCurrentRotation((currentRotation) =>
                    currentRotation.map(
                        (value, index) =>
                            value + 0.3 * (targetRotation[index] - value)
                    )
                );
            };

            const frameId = requestAnimationFrame(updateRotation);
            return () => cancelAnimationFrame(frameId);
        }, [targetRotation]);

        return (
            <group
                ref={group}
                rotation={currentRotation}
                position={[0, 1, 0]}
                scale={[1, 1, 1]}
            >
                <mesh>
                    <primitive object={gltf.scene} />
                    <meshStandardMaterial
                        metalness={1}
                        roughness={0.3}
                        color={"#FFFFFF"}
                    />
                </mesh>
            </group>
        );
    };

    return (
        <div style={{ height: "100vh", width: "100vw" }} className="relative">
            <Canvas style={{ height: "100%", width: "100%" }}>
                <Suspense fallback={null}>
                    <Model />
                    <pointLight
                        position={[10, 10, 10]}
                        color={"#954ea4"}
                        intensity={3}
                    />
                </Suspense>
            </Canvas>
            <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 font-monument text-center text-[30px] sm:text-[35px] md:text-[45px] font-extrabold text-white flex flex-col items-center">
                <h1>AvantGarde Labs</h1>
                <DownArrow className=" h-8 animate-bounce" />
            </div>
        </div>
    );
};

export default AGLogo;
