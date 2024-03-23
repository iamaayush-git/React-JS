import styled from "styled-components";
import Card from "./Card";
function Hero({ filterdata }) {
  return (
    <Main>
      <div className="cards">
        {filterdata?.map((value, i) => (
          <Card value={value} key={i} />
        ))}
      </div>
    </Main>
  );
}
export default Hero;

const Main = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin-top: -5px;
  background-image: url("/public/bg.png");
  .cards {
    width: 100%;
    padding: 5vh;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
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
      h2 {
        font-size: 1.6vw;
        font-weight: bold;
        width: 100%;
        color: #232331;
        margin: auto;
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
