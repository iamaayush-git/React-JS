import { useState } from "react";
import styled from "styled-components";

function RollDice({ diceFace, roll, resetScore, showRule,guide }) {
  return (
    <Main>
      <div className="img_div">
        <img
          onClick={roll}
          src={`../src/assets/dice-faces/dice-${diceFace}.png`}
          alt=""
        />
      </div>
      <div className="text_div">
        <h2>Click On Dice To Roll</h2>
      </div>
      <div className="buttons">
        <Button onClick={resetScore} isOutline={true}>
          Reset Score
        </Button>
        <Button onClick={showRule} isOutline={false}>
          {guide?"Hide Rules":"Show Rules"}
        </Button>
      </div>
      <div className={`guide ${guide?"":"display"}`}>
        <h2>How to play dice game?</h2>
        <p>Select a number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get some points as dice
        </p>
        <p>if you get wrong guess than 2 point will be deducted</p>
      </div>
    </Main>
  );
}
export default RollDice;

const Main = styled.div`
  width: 100vw;
  text-align: center;
  .img_div {
    margin-top: 10vh;
    img {
      width: 12vw;
      cursor: pointer;
    }
  }
  .text_div {
    margin-top: 1vh;
    h2 {
      font-size: 2vw;
      font-weight: bold;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .display{
    display: none;
  }
  .guide {
    margin: 5vh auto 0 auto;
    background-color: wheat;
    width: 50vw;
    padding: 3vh 2vw;
    text-align: left;
    h2 {
      text-align: center;
      font-weight: bold;
      font-family: "Courier New", Courier, monospace;
      padding-bottom: 2vh;
    }
    p {
      font-weight: 600;
      font-size: 1.2vw;
      line-height: 4vh;
    }
  }
`;
const Button = styled.button`
  padding: 1vh 1vw;
  font-size: 2vw;
  font-weight: bold;
  border: 1px solid black;
  outline: none;
  border-radius: 10px;
  background-color: ${(props) => (props.isOutline ? "white" : "black")};
  color: ${(props) => (props.isOutline ? "black" : "white")};
  margin-top: 2vh;
  cursor: pointer;
  transition: 0.5s linear;
  &:hover {
    background-color: ${(props) => (props.isOutline ? "black" : "white")};
    color: ${(props) => (props.isOutline ? "white" : "black")};
    transition: 0.3s linear;
  }
`;
