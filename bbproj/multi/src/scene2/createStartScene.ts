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
    StandardMaterial,
    Texture,
    Color3
  } from "@babylonjs/core";
  
  
  function createCylinder(scene: Scene) {
    let cylinder = MeshBuilder.CreateCylinder(
      "cylinder",
      { height: 4, diameter: 4 },
      scene
    );
    
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/textures/beans.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    cylinder.material = texture;
    cylinder.position.x = -1;
    cylinder.position.y = 2;
    cylinder.position.z = 1;
    return cylinder;
  }

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
  function createSphere(scene: Scene) {
    let sphere = MeshBuilder.CreateSphere( "sphere",
      { diameter: 2, segments: 32   },
      scene,
      )
     
       var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/eye.jpeg",
    scene
  );
    
    texture.diffuseColor = new Color3(1, 1, 1);
    sphere.position.y = 2;
    sphere.position.x = 2;
    sphere.position.z = 0;
    
    
    sphere.material = texture;
    return sphere;

   
  }
  
  function createGround(scene: Scene) {
    let ground = MeshBuilder.CreateGround( "ground",
      { width: 6, height: 6 },
      scene,)
     
       var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/Grass.png",
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
      cylinder?: Mesh;
      light?: Light;
      sphere?: Mesh;
      ground?: Mesh;
      camera?: Camera;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    that.cylinder = createCylinder(that.scene);
    that.light = createLight(that.scene);
    that.sphere = createSphere(that.scene);
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    return that;
  }
