import * as THREE from 'three';
let mixer, delta
const state = {
    activeMesh: {},
    activeMeshName: "Capot.001_CAR PAINT_0",
    shouldUpdate: true,
    cameraPos: new THREE.Vector3(17, 7, 7),
    target: new THREE.Vector3(4, 10, 0),
    caranimation: mixer && mixer.update(delta),

}
console.log(state)
export { state }
export default state;