import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../../Context/ShopContext";
function Navbar() {
  let { getTotalItems } = useContext(shopContext);
  const [menuSelect, setMenuSelect] = useState(0);
  let menuList = [
    {
      item: "Shop",
      link: "/",
    },
    {
      item: "Men",
      link: "/mens",
    },
    {
      item: "Women",
      link: "/womens",
    },
    {
      item: "Kids",
      link: "/kids",
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="" />
        <p>SHOPPERS</p>
      </div>
      <div className="navbar_menu">
        <ul>
          {menuList.map((value, i) => {
            return (
              <li onClick={() => setMenuSelect(i)}>
                <Link
                  style={{ textDecoration: "none", color: "#515155" }}
                  to={value.link}
                >
                  {" "}
                  {value.item}
                </Link>{" "}
                {menuSelect == i ? <hr /> : ""}{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar_cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {" "}
          <img src={cart} alt="" />
        </Link>
        <div className="card_count">{getTotalItems()}</div>
      </div>
    </div>
  );
}
export default Navbar;
