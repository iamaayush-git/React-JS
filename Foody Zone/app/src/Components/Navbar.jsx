import styled from "styled-components";

function Navbar() {
  return (
    <Main>
      <div className="imgAndInp">
        <img src="../public/FoodyZone.png" alt="imgnotfound" />
        <input type="text" placeholder="Search food here" />
      </div>
      <Buttons>
        <button className="firstbtn">All</button>
        <button>Breakfast</button>
        <button>Launch</button>
        <button>Dinner</button>
      </Buttons>
    </Main>
  );
}
export default Navbar;

const Main = styled.div`
  background-color: #232331;
  height: 30vh;
  width: 100vw;
  .imgAndInp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 5vw;
    input{
      background-color: black;
      color: white;
      border: none;
      outline: none;
      font-size: 1vw;
      padding: 1vh 1vw;
      text-align: left;
      border-radius: 5px;
      border: 1px solid #f63939;
    }
    img {
      margin-top: 5vh;
      margin-left: 2vw;
      padding: 3vh 0;
      padding-left: 2vw;
      width: 15vw;
    }
  }
`;
const Buttons = styled.button`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: right;
  align-items: center;
  border: none;
  outline: none;
  margin-top: 2vh;
  gap: 1vw;
  padding-right: 3vw;
  padding-bottom: 2vh;
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
  }
  .firstbtn {
    width: 6vw;
  }
`;
