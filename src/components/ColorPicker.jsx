import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree, useState } from 'react-three-fiber';
import { Suspense, useRef } from 'react';
import state from '../state';
export { ColorPicker };
const ColorPicker = props => {
    const handClick = e => {
      console.log(window.actove)
      console.log(state)

      if (!state.activeMesh) return;
      state.activeMesh.material.color = new THREE.Color(e.target.style.backgroundColor);
    }
    return (
  
      <div style={{ position: 'absolute', zIndex: 1 }}>
        <div
          onClick={handClick}
          style={{
         backgroundColor: 'blue', 
          width: 50, 
          height: 50 }}
        ></div>
        <div
          onClick={handClick}
          style={{
         backgroundColor: 'yellow', 
         width: 50,
           height: 50 }}
        ></div>
        <div
          onClick={handClick}
          style={{
         backgroundColor: 'orange', 
         width: 50,
           height: 50 }}
        ></div>
        <div
          onClick={handClick}
          style={{ 
        backgroundColor: 'white',
           width: 50, 
           height: 50 }}
        ></div>
      </div>
    )
  }
export default ColorPicker;