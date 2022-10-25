import { Canvas, extend, useFrame, useThree, useState } from 'react-three-fiber';
import { Suspense, useRef } from 'react'
export { Bulb };

const Bulb = props => {
    const ref = useRef()
    return (
        <mesh {...props}>
            <pointLight castShadow />
            <sphereBufferGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial emissive="yellow" />
        </mesh>)
}
export default Bulb;