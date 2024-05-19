import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Item from "../Components/Item/Item";
import Breadcrumb from "../Components/BreadCrum/BreadCrumb";
import "./CSS/Product.css";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

function Product() {
  let {all_product} = useContext(shopContext);
  let { productId } = useParams();
  let product = all_product.find((e) => e.id === Number(productId));
  const items = ["Home", "Products", "Category", "Current Page", product.name];
  return (
    <>
      <div className="product_main">
        <Breadcrumb items={items} />
        <ProductDisplay product={product} />
        <RelatedProduct />
      </div>
    </>
  );
}
export default Product;
