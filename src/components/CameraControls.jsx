import { useFrame } from "react-three-fiber";
import { state } from "../state";
import * as THREE from 'three';
export { CameraControls };
const CameraControls = () => {
    useFrame(({ camera, scene }) => {
        if (state.activeMeshName.name !== state.activeMeshName) {
            state.activeMesh = scene.getObjectByName(
                state.activeMeshName
            ) || {}

        }
        if (state.shouldUpdate) {
            camera.position.lerp(state.cameraPos, 0.1);
            scene.__r3f.objects[1].target.lerp(state.target, 0.1);
            scene.__r3f.objects[1].update();
            scene.__r3f.objects[1].target.lerp(state.target, 0.1);
            const diff =
                camera.position.clone()
                    .sub(state.cameraPos).length();
            if (diff < 0.1) state.shouldUpdate = false;
        }
    });
    return (
        null
    )
};

export default CameraControls;