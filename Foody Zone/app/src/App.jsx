import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState();
  const [filterdata, setfilterData] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setfilterData(data);
      });
  }, []);
  function searchFood(e) {
    setfilterData(
      data.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()))
    );
    if (e.target.value == "") {
      setfilterData(data);
    }
  }

  return (
    <MainContainer>
      <Navbar searchFood={searchFood} setfilterData={setfilterData} data={data} />
      <Hero filterdata={filterdata} />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div``;
