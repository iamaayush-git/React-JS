import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Item from "../Components/Item/Item";
import Breadcrumb from "../Components/BreadCrum/BreadCrumb";
import './CSS/Product.css'
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

function Product() {
  let allProduct = useContext(shopContext);
  let { productId } = useParams();
  console.log(productId);
  let product = allProduct.find((e) => e.id === Number(productId));
  const items = ["Home", "Products", "Category", "Current Page", product.name];
  console.log(product);
  return (
    <>
    <div className="product_main">
      <Breadcrumb items={items} />
      <ProductDisplay product={product}/>
    </div>
    </>
  );
}
export default Product;
