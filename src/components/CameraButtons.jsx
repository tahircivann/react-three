import * as THREE from 'three';
import state from '../state';
import { Canvas, extend, useFrame, useThree, useState } from 'react-three-fiber';
import { Suspense, useRef } from 'react';
let mixer = new THREE.AnimationMixer();
let delta=0;
const CameraButtons = ({ }) => {
    const sets = {
        1: {
            cameraPos: [7, 7, 7],
            target: [4, 0, 0],
            name: "object002_CarPaint_0"
        },
        2: {
            cameraPos: [-3, 7, 7],
            target: [-4, 0, 0],
            name: "Capot001_CAR PAINT_0"

        },
        3:{
            cameraPos: [10, 3, -3],
            target: [4, 1, 1],
            name: " ",
            caranimationActive:mixer.update(delta)
        }
    }
    const handleClick = num => {
        console.log(num)
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true;
    }
    return (
        <>
            <button
                onClick={e => handleClick(2)}
                style={{
                    zIndex: 1,
                    position: 'absolute',
                    bottom: '30px',
                    left: '40vw',
                    height: '50px',
                    width: '50px',
                    background: 'yellow',
                    borderRadius: '50%',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    opacity: 0.5,
                    border: '2px solid black',
                    cursor: 'pointer',


                }}
            >
                {'<'}
            </button>
            <button
                onClick={e => handleClick(1)}
                style={{
                    zIndex: 1,
                    position: 'absolute',
                    bottom: '30px',
                    right: '40vw',
                    height: '50px',
                    width: '50px',
                    background: 'yellow',
                    borderRadius: '50%',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    opacity: 0.5,
                    border: '2px solid black',
                    cursor: 'pointer',



                }}
            >
                {'>'}
            </button>
            <button
                onClick={e => handleClick(3)}
                style={{
                    zIndex: 1,
                    position: 'absolute',
                    bottom: '30px',
                    left: '60vw',
                    height: '50px',
                    width: '50px',
                    background: 'yellow',
                    borderRadius: '50%',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    opacity: 0.5,
                    border: '2px solid black',
                    cursor: 'pointer',



                }}
            >
                {'A'}
            </button>
        </>
    )
}
export default CameraButtons;