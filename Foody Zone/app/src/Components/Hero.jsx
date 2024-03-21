import styled from "styled-components";
import data from "./data";
import { useEffect } from "react";
import { useState } from "react";
// import hello from ''
function Hero() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Main>
      <div className="cards">
        {data?.map((value, i) => (
          <div className="card">
            <img src={`http://localhost:9000${value.image}`} alt="" />
            <div className="paraAndBtn">
              <h2>{value.name}</h2>
              <button>{"$ "+value.price.toFixed(2)}</button>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
}
export default Hero;

const Main = styled.div`
  width: 100vw;
  margin-top: -5px;
  background-image: url("/public/bg.png");
  .cards {
    width: 90%;
    padding-top: 5vh;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 3vh;
    column-gap: 1vw;
  }
  .card {
    padding: 1vh 2vw;
    height: 33vh;
    width: 30vw;
    background-color: red;
    margin: auto;
    border-radius: 10px;
    /* opacity: 0.4; */
    background-color: #cac4c4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .paraAndBtn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      gap: 9vh;
      p {
        font-size: 1.4vw;
        font-weight: bold;
        width: 70%;
      }
      button {
        background-color: #f63939;
        border: none;
        outline: none;
        font-size: 1.6vw;
        padding: 1vh 1vw;
        font-size: 1.5vw;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 700;
        width: 8vw;
      }
    }
    img {
      width: 8vw;
    }
  }
`;
