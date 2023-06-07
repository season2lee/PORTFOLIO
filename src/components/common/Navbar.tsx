import styled from "styled-components";
import AboutMe from "../AboutMe";
import Contect from "../Contect";
import EtcProject from "../EtcProject";
import FirstProject from "../FirstProject";
import Home from "../Home";
import SecondProject from "../SecondProject";
import ThirdProject from "../ThirdProject";

type NavbarProps = {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
};

function Navbar({ current, setCurrent }: NavbarProps) {
  return (
    <div>
      <FlexDiv>
        <p onClick={() => setCurrent("home")}>home</p>
        <p onClick={() => setCurrent("about")}>about</p>
        <p onClick={() => setCurrent("1")}>pjt1</p>
        <p onClick={() => setCurrent("2")}>pjt2</p>
        <p onClick={() => setCurrent("3")}>pjt3</p>
        <p onClick={() => setCurrent("etc")}>etc</p>
        <p onClick={() => setCurrent("contect")}>contect</p>
      </FlexDiv>
      {current === "home" && <Home current={current} setCurrent={setCurrent} />}
      {current === "about" && <AboutMe />}
      {current === "1" && <FirstProject />}
      {current === "2" && <SecondProject />}
      {current === "3" && <ThirdProject />}
      {current === "etc" && <EtcProject />}
      {current === "contect" && <Contect />}
    </div>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 3rem;
  p {
    cursor: pointer;
    padding: 2rem;
    color: white;
    mix-blend-mode: difference;
  }
`;

export default Navbar;
