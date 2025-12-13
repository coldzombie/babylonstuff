// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    Texture,
    StandardMaterial,
    Color3
  } from "@babylonjs/core";
  
  
  function createTube(scene: Scene) {
    const myPath = [
      new Vector3(1, 0.85, -2),
      new Vector3(2, -0.35, -1),
    ];
  
    const tube = MeshBuilder.CreateTube(
      "tube",
      { path: myPath, radius: 0.4, sideOrientation: Mesh.DOUBLESIDE },
      scene
    );
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    tube.material = texture;
    return tube;
  }
  function createTube2(scene: Scene) {
    const myPath = [
      new Vector3(-1.85, 0.85, -0.85),
      new Vector3(-1.35, -0.35, -0.35),
    ];
  
    const tube = MeshBuilder.CreateTube(
      "tube",
      { path: myPath, radius: 0.4, sideOrientation: Mesh.DOUBLESIDE },
      scene
    );
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    tube.material = texture;
    return tube;
  }
   function createTube3(scene: Scene) {
    const myPath = [
      new Vector3(1.85, 0.85, 0.85),
      new Vector3(1.35, -0.35, 0.35),
    ];
  
    const tube = MeshBuilder.CreateTube(
      "tube",
      { path: myPath, radius: 0.4, sideOrientation: Mesh.DOUBLESIDE },
      scene
    );
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    tube.material = texture;
    return tube;
  }
   function createTube4(scene: Scene) {
    const myPath = [
      new Vector3(0, 0.85, 0),
      new Vector3(0, -0.35, 0),
    ];
  
    const tube = MeshBuilder.CreateTube(
      "tube",
      { path: myPath, radius: 0.4, sideOrientation: Mesh.DOUBLESIDE },
      scene
    );
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    tube.material = texture;
    return tube;
  }
  function createTube5(scene: Scene) {
    const myPath = [
      new Vector3(-1, 0.85, 2),
      new Vector3(-2, -0.35, 1),
    ];
  
    const tube = MeshBuilder.CreateTube(
      "tube",
      { path: myPath, radius: 0.4, sideOrientation: Mesh.DOUBLESIDE },
      scene
    );
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    tube.material = texture;
    return tube;
  }

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
  
  
 function createGround(scene: Scene) {
    let ground = MeshBuilder.CreateGround( "ground",
      { width: 8, height: 8 },
      scene,)
     
       var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/eye.jpeg",
    scene
    );
     texture.diffuseColor = new Color3(1, 1, 1);
    ground.material = texture;
    return ground;
  }
  function createArcRotateCamera(scene: Scene) {
    let camAlpha = -Math.PI / 2,
      camBeta = Math.PI / 2.5,
      camDist = 10,
      camTarget = new Vector3(0, 0, 0);
    let camera = new ArcRotateCamera(
      "camera1",
      camAlpha,
      camBeta,
      camDist,
      camTarget,
      scene,
    );
    camera.attachControl(true);
    return camera;
  }
  
  export default function createStartScene(engine: Engine) {
    interface SceneData {
      scene: Scene;
      tube?: Mesh;
      light?: Light;
      sphere?: Mesh;
      ground?: Mesh;
      camera?: Camera;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    that.tube = createTube(that.scene);
    that.light = createLight(that.scene);
    that.tube = createTube2(that.scene);
    that.tube = createTube3(that.scene);
    that.tube = createTube4(that.scene);
    that.tube = createTube5(that.scene);
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    return that;
  }
