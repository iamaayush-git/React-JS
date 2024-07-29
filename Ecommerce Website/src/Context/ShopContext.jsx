import { createContext, useState } from "react";
import all_product from "../Components/assets/all_product";

export const shopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [showToast, setShowToast] = useState(false);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };
  const getTotalAmout = () => {
    let itemInfo,
      totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalItems = () => {
    let totalitems = 0;
    for (let i = 1; i < all_product.length; i++) {
      if (cartItems[i] >= 1) {
        totalitems += cartItems[i];
      }
    }
    return totalitems;
  };
  const contextValue = {
    all_product,
    cartItems,
    showToast,
    addToCart,
    removeFromCart,
    getTotalAmout,
    getTotalItems,
    setShowToast,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
export default ShopContextProvider;
