import { Dispatch, SetStateAction, useEffect } from "react";
import { keyframes, styled } from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

type HomeProps = {
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
};

function Home({ setCurrent }: HomeProps) {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas = document.getElementById("homeCanvas") as HTMLCanvasElement;
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

    const boxGeometry = new THREE.BoxGeometry(80, 80, 80);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);

    const geometry = new THREE.SphereGeometry(100, 10, 10);
    const material = new THREE.MeshNormalMaterial({
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const loader = new FontLoader();

    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
      function (font) {
        const text = new TextGeometry("Season", {
          font: font,
          size: 10,
          height: 5,
          curveSegments: 12,
        });
        const textMaterial = new THREE.MeshNormalMaterial({
          // wireframe: true,
        });
        const textMesh = new THREE.Mesh(text, textMaterial);
        scene.add(textMesh);
      }
    );

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

    document.addEventListener("mousemove", move);

    function move(e: any) {
      mesh.rotation.x = e.pageX * 0.01;
      mesh.rotation.y = -e.pageX * 0.01;

      renderer.render(scene, camera);
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
    <AnimatedDiv>
      <BackCanvas id="homeCanvas" />
      어디로 갈까? 목차 나의 슬로건 슬로건은 클릭 시 관련 velog로 좀
      인터렉티브한 화면
      <br />
      <button onClick={() => setCurrent("about")}>about</button>
      <button onClick={() => setCurrent("1")}>1</button>
      <button onClick={() => setCurrent("2")}>2</button>
      <button onClick={() => setCurrent("3")}>3</button>
      <button onClick={() => setCurrent("etc")}>etc</button>
      <button onClick={() => setCurrent("contect")}>contect</button>
    </AnimatedDiv>
  );
}

const BackCanvas = styled.canvas`
  position: fixed;
  top: 0;
  z-index: -2;
`;

const gMotion = keyframes`
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 100% 0%;
  }
`;

const AnimatedDiv = styled.div`
  /* position: fixed;
  top: 0;
  z-index: -5;
  animation: ${gMotion} 15s linear infinite;
  min-height: 100vh;
  padding-top: 6rem;
  width: 100vw;
  background-image: linear-gradient(
    70deg,
    #d600ff,
    #fdf800,
    #01f1ff,
    #d600ff,
    #fdf800
  );
  background-size: 400% 100%; */
`;

export default Home;
