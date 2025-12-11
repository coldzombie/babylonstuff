import { Vector3, Quaternion } from "@babylonjs/core";
let boxAngle = 0.3;
let boxSpeed = 0.01;
export default function createRunScene(runScene) {
    runScene.scene.onAfterRenderObservable.add(() => {
        const axis = new Vector3(0, 0, 1).normalize();
        const quat = Quaternion.RotationAxis(axis, boxAngle * 2 * Math.PI);
        boxAngle += boxSpeed;
        boxAngle %= 1;
    });
}
