import { Dispatch, SetStateAction, useEffect } from "react";
import { keyframes, styled } from "styled-components";

type HomeProps = {
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
};

function Home({ setCurrent }: HomeProps) {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);
  return (
    <AnimatedDiv>
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

const gMotion = keyframes`
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 100% 0%;
  }
`;

const AnimatedDiv = styled.div`
  animation: ${gMotion} 10s linear infinite;
  min-height: 100vh;
  background-image: linear-gradient(
    90deg,
    #d600ff,
    #fdf800,
    #01f1ff,
    #d600ff,
    #fdf800
  );
  background-size: 400% 100%;
`;

export default Home;
