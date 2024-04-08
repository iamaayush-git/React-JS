import exclusive_image from "../assets/exclusive_image.png"
import "./Offers.css"
function Offers(){

    return (
       <div className="offer_container">
        <div className="offer_left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offer_right">
            <img src={exclusive_image} alt="" />
        </div>
       </div>
    )
}
export default Offers;