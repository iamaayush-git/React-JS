import { useState } from "react";
import styled from "styled-components";
import RollDice from "./RollDice";
function GameplayTop({
  selectedNumber,
  setSelectedNumber,
  diceFace,
  SetDiceFace,
  score,
  roll,
  showError,
  resetScore,
  showRule,
  guide
}) {
  const number = [1, 2, 3, 4, 5, 6];
  // const [selectedNumber, setSelectedNumber] = useState(1);
  return (
    <>
      <TopSection>
        <div className="first">
          <h2>{score}</h2>
          <p>Total Score</p>
        </div>
        <div className="second">
          <h2 className={`error ${showError?"":"showMessage"}`}>please select a number!</h2>
          <div>
            {number.map((value, i) => {
              return (
                <Button
                  key={i}
                  onClick={() => setSelectedNumber(value)}
                  isselected={value === selectedNumber}
                >
                  {value}
                </Button>
              );
            })}
          </div>
          <h2>Select Number</h2>
        </div>
      </TopSection>
      <RollDice diceFace={diceFace} SetDiceFace={SetDiceFace} roll={roll} resetScore={resetScore} showRule={showRule} guide={guide}/>
    </>
  );
}
export default GameplayTop;
const TopSection = styled.div`
  width: 100vw;
  padding-top: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: end;
  .first {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 5vw;
      font-weight: bold;
    }
    p {
      font-size: 3vw;
      font-weight: bold;
    }
  }
  
  .second {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    h2 {
      font-size: 2vw;
      font-weight: bold;
    }
    .error{
    color: red;
    font-size: 1.6vw;
  }
  .showMessage{
    display: none;
  }
  }
`;
const Button = styled.button`
  padding: 5vh 2vw;
  border: none;
  margin-left: 1vw;
  font-size: 2vw;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isselected ? "black" : "transparent")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  border: 1px solid black;
  transition: 0.1s linear;
  &:hover {
    background-color: #3b3a3a;
    color: white;
    transition: 0.1s linear;
  }
`;
