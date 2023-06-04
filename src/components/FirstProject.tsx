import { useEffect } from "react";
import { styled } from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function FirstProject() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas = document.getElementById(
      "myThreeJsCanvas"
    ) as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    const controls = new OrbitControls(camera, renderer.domElement);

    var xSpeed = 0.0001;
    var ySpeed = 0.0001;

    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event: any) {
      var keyCode = event.which;
      if (keyCode === 87) {
        boxMesh.position.y += ySpeed;
      } else if (keyCode === 83) {
        boxMesh.position.y -= ySpeed;
      } else if (keyCode === 65) {
        boxMesh.position.x -= xSpeed;
      } else if (keyCode === 68) {
        boxMesh.position.x += xSpeed;
      } else if (keyCode === 32) {
        boxMesh.position.set(0, 0, 0);
      }
      animate();
    }

    let requestId: number;
    const animate = () => {
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
      requestId = window.requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div>
      왜이래
      <BackCanvas id="myThreeJsCanvas" />
    </div>
  );
}

const BackCanvas = styled.canvas`
  position: fixed;
  top: 0;
  z-index: -2;
`;

export default FirstProject;
