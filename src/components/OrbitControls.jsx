import { Canvas, extend, useFrame, useThree, useState } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
extend({ OrbitControls });
export { Orbit }
const Orbit = () => {
    const { camera, gl } = useThree();
    return (
        <orbitControls args={[camera, gl.domElement]} />
    )
}
export default Orbit;