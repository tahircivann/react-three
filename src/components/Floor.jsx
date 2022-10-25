import { Canvas, extend, useFrame, useThree, useState } from 'react-three-fiber';
import { Suspense, useRef } from 'react';
export { Floor };
const Floor = props => {

    return (
      <mesh
        {...props}
        receiveShadow>
        <ambientLight intensity={0.1} />
        <boxBufferGeometry args={[200, 1, 200]} />
        <meshPhongMaterial attach="material" color="#ffffff" />    </mesh>)
  }
  export default Floor;