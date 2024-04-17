import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCatagory.css"
function ShopCatagory(props) {
  const data = useContext(shopContext);
  console.log(props.category);
  return (
    <div className="shop_catagory">
      <img src={props.banner} alt="" />
      <div className="shop_item">
      {data.map((item, i) => {
        if (props.category == item.category) {
          return (
            <Item
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        }
      })}
      </div>
    </div>
  );
}
export default ShopCatagory;
