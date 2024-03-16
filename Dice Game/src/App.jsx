import { useState } from "react";
import Home from "./components/Home/Home.jsx";
import Gameplay from "./components/Gameplay/Gameplay.jsx";

function App() {
  const [IsGamePlay, setIsGamePlay] = useState(false);
  return (
    <>
      {IsGamePlay ? (
        <Gameplay/>
      ) : (
        <Home setIsGamePlay={setIsGamePlay} />
      )}
    </>
  );
}

export default App;
