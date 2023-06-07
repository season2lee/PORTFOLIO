import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AppDiv>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  /* text-align: center; */
`;
export default App;
