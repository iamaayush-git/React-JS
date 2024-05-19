import Item from "../Item/Item";
import "./RelatedProduct.css";
import data from "../assets/data.js";
function RelatedProduct() {
  return (
    <div className="relatedproduct_main">
      <h2>Related Product</h2>
      <hr />
      <div className="relatedproduct_items">
      {data.map((item, i) => {
        return (
          <Item
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
            image={item.image}
            product_id={item.id}
          />
        );
      })}
    </div>
    </div>
  );
}
export default RelatedProduct;
