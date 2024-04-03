import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { useState } from "react";
function Navbar() {
  const [menuSelect,setMenuSelect] = useState("Shop")
  let menuList = ["Shop", "Men", "women", "Kids"];
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="" />
        <p>SHOPPERS</p>
      </div>
      <div className="navbar_menu">
        <ul>
          {
            menuList.map((value)=>{
              return <li onClick={()=>setMenuSelect(value)}>{value} {menuSelect==value?<hr/>:""} </li>
            })
          }
        </ul>
      </div>
      <div className="navbar_cart">
        <button>Login</button>
        <img src={cart} alt="" />
        <div className="card_count">0</div>
      </div>
    </div>
  );
}
export default Navbar;
