import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import ShopCatagory from "./Pages/ShopCatagory";
import Shop from "./Pages/Shop";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCatagory />} />
          <Route path="/womens" element={<ShopCatagory />} />
          <Route path="/kids" element={<ShopCatagory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
