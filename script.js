import {OrbitControls} from "./js/OrbitControls.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const textureLoader = new THREE.TextureLoader();
let sunTexture = textureLoader.load( './Texture/sun.jpeg' );
let mercuryTexture = textureLoader.load( './Texture/mercury.jpg' );
let venusTexture = textureLoader.load( './Texture/venus.jpg' );
let earthTexture = textureLoader.load( './Texture/Earth.jpg' );
let marsTexture = textureLoader.load( './Texture/mars.jpg' );
let moonTexture = textureLoader.load( './Texture/moon.jpg' );
let JupiterTexture = textureLoader.load( './Texture/Jupiter.jpg' );
let SatrunTexture = textureLoader.load( './Texture/Saturn.jpg' );
let SatrunTexturering = textureLoader.load( './Texture/ring.png' );
let uT = textureLoader.load( './Texture/U.jpg' );
let nT = textureLoader.load( './Texture/N.jpg' );

const Sungeometry = new THREE.SphereGeometry( 30 , 100, 100 );
const Sunmaterial = new THREE.MeshBasicMaterial( { map: sunTexture } );
const sun = new THREE.Mesh( Sungeometry, Sunmaterial );
scene.add( sun );

const Mercurygeometry = new THREE.SphereGeometry( 10 , 100, 100 );
const Mercurymaterial = new THREE.MeshStandardMaterial( { map: mercuryTexture } );
const mercury = new THREE.Mesh( Mercurygeometry, Mercurymaterial );
const MObject = new THREE.Object3D();
MObject.add(mercury);
scene.add(MObject);

const Venusgeometry = new THREE.SphereGeometry( 10 , 100, 100 );
const Venusmaterial = new THREE.MeshStandardMaterial( { map: venusTexture } );
const Venus = new THREE.Mesh( Venusgeometry, Venusmaterial );
const VObject = new THREE.Object3D();
VObject.add(Venus);
scene.add(VObject);

const Earthgeometry = new THREE.SphereGeometry( 10 , 100, 100 );
const Earthmaterial = new THREE.MeshStandardMaterial( { map: earthTexture } );
const Earth = new THREE.Mesh( Earthgeometry, Earthmaterial );
const EObject = new THREE.Object3D();
EObject.add(Earth);
scene.add(EObject);

const Moongeometry = new THREE.SphereGeometry( 5, 100, 100 );
const Moonmaterial = new THREE.MeshStandardMaterial( { map: moonTexture } );
const Moon = new THREE.Mesh( Moongeometry, Moonmaterial );
EObject.add(Moon);
scene.add(EObject);

const Marsgeometry = new THREE.SphereGeometry( 10 , 100, 100 );
const Marsmaterial = new THREE.MeshStandardMaterial( { map: marsTexture } );
const Mars = new THREE.Mesh( Marsgeometry, Marsmaterial );
const MAObject = new THREE.Object3D();
MAObject.add(Mars);
scene.add(MAObject);

const Jupitergeometry = new THREE.SphereGeometry( 20 , 100, 100 );
const Jupitermaterial = new THREE.MeshStandardMaterial( { map: JupiterTexture } );
const Jupiter = new THREE.Mesh( Jupitergeometry, Jupitermaterial );
const JObject = new THREE.Object3D();
JObject.add(Jupiter);
scene.add(JObject);

const Saterngeometry = new THREE.SphereGeometry( 20 , 100, 100 );
const Saternmaterial = new THREE.MeshStandardMaterial( { map: SatrunTexture } );
const Satern = new THREE.Mesh( Saterngeometry, Saternmaterial );
const SObject = new THREE.Object3D();
SObject.add(Satern);
scene.add(SObject);

const Ugeometry = new THREE.SphereGeometry( 20 , 100, 100 );
const Umaterial = new THREE.MeshStandardMaterial( { map: uT } );
const U = new THREE.Mesh( Ugeometry, Umaterial );
const UObject = new THREE.Object3D();
UObject.add(U);
scene.add(UObject);

const Ngeometry = new THREE.SphereGeometry( 20 , 100, 100 );
const Nmaterial = new THREE.MeshStandardMaterial( { map: nT } );
const N = new THREE.Mesh( Ngeometry, Nmaterial );
const NObject = new THREE.Object3D();
NObject.add(N);
scene.add(NObject);

const Saterngeometryring = new THREE.RingGeometry( 50, 32, 32 );
const Saternmaterialring = new THREE.MeshBasicMaterial( {  map: SatrunTexturering , side : THREE.DoubleSide} );
const Saternring = new THREE.Mesh( Saterngeometryring, Saternmaterialring );
SObject.add(Saternring);
scene.add(SObject);
Saternring.rotation.x = -0.5 * Math.PI

mercury.position.x = 50;
Venus.position.x = 80;
Earth.position.x = 100;
Mars.position.x = 120;
Moon.position.x = 110;
Jupiter.position.x = 160;
Satern.position.x = 210;
Saternring.position.x = 210;
U.position.x = 260;
N.position.x = 290;

camera.position.z = 100;
camera.position.y = 100;
camera.position.x = 100;

let light = new THREE.PointLight(0xFFFFFF , 2 , 300);
scene.add(light);

function animate() {
	requestAnimationFrame( animate );
    sun.rotation.y += 0.01;
    mercury.rotation.y += 0.01;
    MObject.rotation.y += 0.1;
    Venus.rotation.y += 0.01;
    VObject.rotation.y += 0.09;
    Earth.rotation.y += 0.08;
    Moon.rotation.y += 0.09;
    EObject.rotation.y += 0.08;
    Mars.rotation.y += 0.01;
    MAObject.rotation.y += 0.07;
    Jupiter.rotation.y += 0.01;
    JObject.rotation.y += 0.07;
    Satern.rotation.y += 0.01;
    SObject.rotation.y += 0.06;
    U.rotation.y += 0.01;
    UObject.rotation.y += 0.05;
    N.rotation.y += 0.01;
    NObject.rotation.y += 0.04;
    controls.update();
	renderer.render( scene, camera );
}
animate();