import { useContext } from "react";
import "./CartItem.css";
import { shopContext } from "../../Context/ShopContext";

function CartItem() {
  let { all_product, cartItems, getTotalAmout, removeFromCart, setCartNumber } =
    useContext(shopContext);
  return (
    <>
      <div className="cartitem-main">
        <div className="cartitem-heading">
          <h5>Product</h5>
          <h5>Title</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
          <h5>Remove</h5>
        </div>
        <hr className="dividor" />
        <div className="cartitem-product-main">
          {all_product.map((item, index) => {
            if (cartItems[index + 1] >= 1) {
              return (
                <>
                  <div className="cartitem-product">
                    <img src={item.image} alt="" />
                    <p className="title">{item.name}</p>
                    <div className="price">{item.new_price}</div>
                    <div className="quantity">{cartItems[index + 1]}</div>
                    <div className="total">
                      {item.new_price * cartItems[index + 1]}
                    </div>
                    <h4
                      className="removeproduct"
                      onClick={() => removeFromCart(index + 1)}
                    >
                      X
                    </h4>
                  </div>
                  <hr className="dividor" />
                </>
              );
            }
            return null;
          })}
        </div>
        <div className="carditem-down">
          <div className="cartitem-totaloption">
            <h1>Cart Totals</h1>
            <div className="cartitem-subtotal">
              <p>Sub Total</p>
              <p>{getTotalAmout()}</p>
            </div>
            <hr className="divider" />
            <div className="cartitem-shippingfee">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="divider" />
            <div className="cartitem-total">
              <p>Total</p>
              <p>{getTotalAmout()}</p>
            </div>
            <button className="checkout">PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitem-promocode">
            <p>If you have promo code, Enter it here</p>
            <div className="cartitem-inputandbtn">
              <input type="text" placeholder="Prome Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItem;
