import { useState } from "react";
import AboutMe from "../components/AboutMe";
import FirstProject from "../components/FirstProject";
import FourthProject from "../components/FourthProject";
import SecondProject from "../components/SecondProject";
import ThirdProject from "../components/ThirdProject";

function Home() {
  const [current, setCurrent] = useState<string>("home");
  return (
    <div>
      그냥 여기서 미친놈처럼 컴포넌트 클릭으로 가는 수밖에 없나
      <br />
      <button onClick={() => setCurrent("home")}>home</button>
      <button onClick={() => setCurrent("1")}>1</button>
      <button onClick={() => setCurrent("2")}>2</button>
      <button onClick={() => setCurrent("3")}>3</button>
      <button onClick={() => setCurrent("4")}>4</button>
      {current === "home" && <AboutMe />}
      {current === "1" && <FirstProject />}
      {current === "2" && <SecondProject />}
      {current === "3" && <ThirdProject />}
      {current === "4" && <FourthProject />}
    </div>
  );
}

export default Home;
