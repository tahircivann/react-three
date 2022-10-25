
import { Suspense, useRef } from 'react';
import { useLoader, Canvas, extend, useFrame, useThree, useState } from "react-three-fiber";

export { Box };
const Box = props => {
    const ref = useRef()
    useFrame(state => {
        ref.current.rotation.y += 0.01;
    })

    const handlePointerDown = e => {
        console.log(e.object.scale)
        e.object.active = true;
        if (window.activeMesh) {
            scaleDown(window.activeMesh)
            window.activeMesh.active = false;
        }
        window.actove = e.object
    }

    const handlePointerEnter = e => {
        e.object.scale.x = e.object.scale.y = e.object.scale.z = 1.2;
    }

    const handlePointerLeave = e => {
        if (!e.object.active) {
            scaleDown(e.object)
        }
    }
    const scaleDown = object => {
        object.scale.x = object.scale.y = object.scale.z = 1;
    }


    return (
        <mesh
            ref={ref}
            {...props}
            castShadow
            receiveShadow
            onPointerDown={handlePointerDown}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >

            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
        </mesh>)
}
export default Box;