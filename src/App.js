import logo from './logo.svg';
import './App.css';
import { Canvas, extend, useFrame, useThree, useState } from 'react-three-fiber';
import { Suspense, useRef } from 'react';
import { Model } from './components/Model'
import { Model2 } from './components/Model2'
import { Orbit } from './components/OrbitControls'
import { Box } from './components/Box'
import { Floor } from './components/Floor'
import { Bulb } from './components/Bulb'
import { ColorPicker } from './components/ColorPicker'
import { CameraControls } from './components/CameraControls'
import { state } from './state'
import * as THREE from 'three';
import CameraButtons from './components/CameraButtons';
/*
const handClick = e => {
  console.log(e)
  e.object.material.color = new THREE.Color('blue')
  if (!window.actove) return;
  e.object.material.color = new THREE.Color(e.target.style.backgroundColor);
}
*/
function App() {

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ColorPicker />
      <CameraButtons />

      <Canvas
        shadows
        colorManagment
        shadowMap
        camera={{ position: [3, 3, 4] }}
      >
        <CameraControls />
        <fog attach="fog" args={['#cacaca', 30, 100]} />
        <Suspense fallback={null}>
        </Suspense>
        <Suspense fallback={null}>
        </Suspense>
        <ambientLight intensity={0.7} />
        <Orbit />
        <Suspense fallback={null}>
          <Model
            //onClick={handClick}
            path='/range_rover_evoque/untitled2.glb'
            scale={new Array(3).fill(3)}
            position={new Array(3, 0.8, 0)}
          />
          <Model
            //onClick={handClick}
            path='/tesla_model_3/scene.gltf'
            position={new Array(-3, 0.8, 0)}
            scale={new Array(3).fill(0.011)}
          />

        </Suspense>

        <pointLight castShadow />
        <Bulb castShadow position={[0, 5, 0]} />
        <axesHelper args={[5]} />
        <gridHelper args={[200, 100]}
          material={new THREE.MeshBasicMaterial({ color: new THREE.Color('grey'), transparent: true, opacity: 0.4 })} />

        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>

  );
}

export default App;
