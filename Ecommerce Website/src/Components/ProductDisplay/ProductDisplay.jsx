import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";
function ProductDisplay({ product }) {
  let { addToCart, removeFromCart } = useContext(shopContext);
  return (
    <div className="productDisplay">
      <div className="productdisplay_left">
        <div className="productdisplayimage_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay_img">
          <img src={product.image} alt="" className="productdisplaymain_img" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_star">
          <div className="starImages">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull} alt="" />
            <img src={star_dull} alt="" />
          </div>
          <p>(122)</p>
        </div>
        <div className="productdisplayright_prices">
          <div className="productdisplayright_oldprice">
            ${product.old_price}
          </div>
          <div className="productdisplayright_newprice">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplayright_size">
          <h2>Select Size</h2>
          <div className="product_sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => addToCart(product.id)}
          className="productdisplayright_btn"
        >
          Add To Cart
        </button>
        <div className="productdisplayright_category">
          <div>
            <span>Catagory : </span>
            <span>Women, T-Shirt, Crop Top</span>
          </div>
          <div>
            <span>Tags : </span>
            <span>Modern, Latest</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDisplay;
