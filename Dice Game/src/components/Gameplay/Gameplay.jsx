import GameplayTop from "./GameplayTop";
import { useState } from "react";

function Gameplay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [diceFace, SetDiceFace] = useState(1);
  const [score, setScore] = useState(0);
  const [showError, setshowError] = useState(false);
  const [guide, setGuide] = useState(false);
  function roll() {
    if (!selectedNumber) {
        setshowError(true);
        return
    };
    setshowError(false)
    let number = Math.floor(Math.random() * 6 + 1);
    SetDiceFace(number);
    if (number == selectedNumber) {
      setScore(score + 5);
      setSelectedNumber();
    } else {
        setScore(score - 2);
        setSelectedNumber();
    }
  }
  function resetScore(){
       setScore(0)
  }
  function showRule(){
    setGuide((prev)=>!prev);
  }
  return (
    <>
      <GameplayTop
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        diceFace={diceFace}
        SetDiceFace={SetDiceFace}
        score={score}
        roll={roll}
        showError={showError}
        resetScore={resetScore}
        showRule={showRule}
        guide={guide}
      />
    </>
  );
}
export default Gameplay;
