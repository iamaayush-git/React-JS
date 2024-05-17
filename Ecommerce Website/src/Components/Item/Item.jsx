import { Link } from "react-router-dom";
import "./Item.css";

function Item({ name, old_price, new_price, image, product_id }) {
  return (
    <>
      <div className="item">
        <Link to={`/product/${product_id}`}>
          {" "}
          <img
            onClick={window.scrollTo(0, 200)}
            id="data_img"
            src={image}
            alt=""
          />
        </Link>
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="item_price">
          <div className="old_price">
            <p>${old_price}</p>
          </div>
          <div className="new_price">
            <p>${new_price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
