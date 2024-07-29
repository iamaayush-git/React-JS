import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/BreadCrum/BreadCrumb";
import "./CSS/Product.css";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
import Toast from "../Components/Toast/Toast";

function Product() {
  let {all_product,showToast} = useContext(shopContext);
  let { productId } = useParams();
  let product = all_product.find((e) => e.id === Number(productId));
  const items = ["Home", "Products", "Category", "Current Page", product.name];
  return (
    <>
      <div className="product_main">
        <Breadcrumb items={items} />
        <ProductDisplay product={product} />
        <Toast
        message="1 new item(s) have been added to your cart"
        show={showToast}
      />
        <RelatedProduct />
      </div>
    </>
  );
}
export default Product;
