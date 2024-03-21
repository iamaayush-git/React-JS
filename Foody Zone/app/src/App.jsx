import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState();
  const [searchedData, setSearchedData] = useState();
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
    console.log("Triggered");
    setSearchedData(e.target.value.toLowerCase());
    setfilterData(
      data.filter((value) => value.name.toLowerCase().includes(searchedData))
    );
    if (e.target.value == "") {
      setfilterData(data);
    }
  }

  return (
    <MainContainer>
      <Navbar searchFood={searchFood} />
      <Hero filterdata={filterdata} />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div``;
