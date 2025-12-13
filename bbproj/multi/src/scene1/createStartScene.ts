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
    Color3,
    StandardMaterial,
    CubeTexture,
    Texture,
  } from "@babylonjs/core";
  
  
  function createBox(scene: Scene) {
    let box = MeshBuilder.CreateBox("box",{size: 1}, scene);
     var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/reflectivity.png",
    scene
    
     )
    box.position.y = 0.5;
    box.position.x = -1;
    texture.diffuseColor = new Color3(1, 1, 1);
     box.material = texture;
   
    return box;
     
  }
  function createBox2(scene: Scene) {
    let box = MeshBuilder.CreateBox("box",{size: 1}, scene);
     var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/reflectivity.png",
    scene
    
     )
    box.position.y = 1.5;
    box.position.x = -1;
    box.position.z = 0.5;
    texture.diffuseColor = new Color3(1, 1, 1);
     box.material = texture;
   
    return box;
     
  }
  function createBox3(scene: Scene) {
    let box = MeshBuilder.CreateBox("box",{size: 1}, scene);
     var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/reflectivity.png",
    scene
    
     )
    box.position.y = 0.5;
    box.position.x = -1;
    box.position.z = 1;
    texture.diffuseColor = new Color3(1, 1, 1);
     box.material = texture;
   
    return box;
     
  }
  

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
  
  function createSphere(scene: Scene) {
    let sphere = MeshBuilder.CreateSphere( "sphere",
      { diameter: 2, segments: 32 },
      scene,
      )
     
       var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/Grass.png",
    scene
  );
    
    texture.diffuseColor = new Color3(1, 1, 1);
    sphere.position.y = 1;
    sphere.position.x = 2;
    sphere.material = texture;
    return sphere;

   
  }
  
  function createGround(scene: Scene) {
    let ground = MeshBuilder.CreateGround( "ground",
      { width: 6, height: 6 },
      scene,)
     
       var texture = new StandardMaterial("reflective", scene);
     texture.ambientTexture = new Texture(
    "./assets/textures/wood.jpg",
    scene
    );
     texture.diffuseColor = new Color3(1, 1, 1);
    ground.material = texture;
    return ground;
  }
  function createSky(scene: Scene) {
  const skybox = MeshBuilder.CreateBox("skyBox", { size: 150 }, scene);
  const skyboxMaterial = new StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new CubeTexture(
    "./assets/texturesx/skybox",
    scene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode =
    Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
  skyboxMaterial.specularColor = new Color3(0, 0, 0);
  skybox.material = skyboxMaterial;
  return skybox;
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
      box?: Mesh;
      light?: Light;
      sphere?: Mesh;
      ground?: Mesh;
      camera?: Camera;
      
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    that.box = createBox(that.scene);
    that.box = createBox2(that.scene);
    that.box = createBox3(that.scene);
    that.light = createLight(that.scene);
    that.sphere = createSphere(that.scene);
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    return that;
  }
