import Hero from "../Components/Hero/Hero";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";

function shop() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </>
  );
}
export default shop;
