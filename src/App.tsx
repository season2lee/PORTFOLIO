import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";

function App() {
  return (
    <AppDiv>
      <GlobalStyles />
      깃허브에서 spa가 안되다보니 라우팅이 안먹혀서 고뇌에 빠짐
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  text-align: center;
  width: 100vw;
`;
export default App;
