import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <MainContainer>
     <Navbar/>
     <Hero/>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  
`
