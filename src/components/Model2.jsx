import { useLoader } from "react-three-fiber";
import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree, useState } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export { Model2 }

const Model2 = props => {
    const model = useLoader(
        GLTFLoader,
        props.path
    )
    let mixer
    console.log(model.animations)
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
    mixer && mixer.update(delta);
    })
console.log(model.scene)

    return (
        <primitive
            object={model.scene}
            {...props}
        />
    )
}
export default Model2;
