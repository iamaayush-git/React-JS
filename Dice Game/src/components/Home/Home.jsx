import styled from "styled-components";

function Home({setIsGamePlay}) {
function toggle(){
  setIsGamePlay((prev)=>!prev);
}
  return (
    <>
      <Main>
        <First>
          <img src="../src/assets/dice.jpg" alt="" />
        </First>
        <Second>
          <h2>DICE GAME</h2>
          <Button onClick={toggle}>Play Now</Button>
        </Second>
      </Main>
    </>
  );
}
export default Home;
const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1vh 2vw;
  font-size: 2vw;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2vh;
  &:hover{
    background-color: #3b3b3b;
    color: white;
    transition: .2s linear;
  }
`;
const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0px 5%;
  margin: auto;
`;
const First = styled.div`
  flex-basis: 50%;
  img {
    width: 90%;
    box-shadow: 10px 5px 10px grey;
  }
`;
const Second = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  h2 {
    font-size: 4vw;
    font-weight: 700;
  }
`;
