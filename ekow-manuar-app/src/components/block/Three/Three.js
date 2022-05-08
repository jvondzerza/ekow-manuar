import {Canvas, useFrame} from "@react-three/fiber";
import {softShadows, MeshWobbleMaterial, OrbitControls} from "@react-three/drei";
import {useState, useRef} from "react";

softShadows();

const Shape = ({position}) => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
    <mesh castShadow position={position} ref={mesh}>
        <boxBufferGeometry attach={'geometry'} args={[2,2,2]} />
        <MeshWobbleMaterial attach={'material'} speed={1} factor={.6} color={'white'} opacity={0.5} transparent />
    </mesh>
    )
}

const Three = () => {

    return (
        <div className={'w-full h-full m-0 p-0'}>
            <Canvas shadows colorManagement camera={{position: [-5, 4, 10], fov: 60}}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10,0,-20]} intensity={0.5} />
                <pointLight position={[0,-10,0]} intensity={1} />
                <group>
                    <mesh receiveShadow rotation={[-Math.PI / 2,0,0]} position={[0,-3,0]}>
                        <planeBufferGeometry attach={'geometry'} args={[100, 100]} />
                        <shadowMaterial attach={'material'} opacity={0.1} />
                        <meshStandardMaterial attach={'material'} color={'white'} opacity={0.2} transparent />
                    </mesh>
                </group>
                <Shape position={[0,1,0]} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Three;