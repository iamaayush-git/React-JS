import hand from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_left">
        <h3>NEW ARRIVALS ONLY</h3>
          <div className="hand_icon">
            <p>new</p>
            <img src={hand} alt="" />
          </div>
          <p className="collection_for_Everyone">Collections</p>
          <p className="collection_for_Everyone">for Everyone</p>
          <div className="latestCollection_btn">
          <button>Latest Collection <img src={arrow} alt="" /></button>
          </div>
        </div>
        <div className="hero_right">
          <img src={hero_img} alt="" />
        </div>
      </div>
    </>
  );
}
export default Hero;
