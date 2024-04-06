import Item from "../Item/Item.jsx";
import data_product from "../assets/data";
import "./Popular.css"
function Popular() {
  return (
    <div className="popular">
      <h2>Popular in women</h2>
      <hr />
      <div className="item_component">
        {data_product.map((value, i) => {
          return (
            <Item
              key={i}
              name={value.name}
              image={value.image}
              old_price={value.old_price}
              new_price={value.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Popular;
