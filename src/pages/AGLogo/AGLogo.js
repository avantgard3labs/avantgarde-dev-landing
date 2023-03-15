import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef, useState, useEffect } from "react";
import Logo from "./ag_3d_logo.glb";

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
        <div style={{ height: "100vh", width: "100vw" }}>
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
        </div>
    );
};

export default AGLogo;
