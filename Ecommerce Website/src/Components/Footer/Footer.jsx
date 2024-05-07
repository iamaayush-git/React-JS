import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import pintrest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
function Footer() {
  return (
    <>
      <div className="footer_main">
        <div className="footer_logo">
          <img src={footer_logo} alt="" />
          <h2>SHOPPERS</h2>
        </div>
        <div className="footer_ul">
          <ul>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer_links">
          <img src={pintrest_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={whatsapp_icon} alt="" />
        </div>
        <hr className="footer_hr" />
        <div className="footer_footer">
          <p>Copyright @ 2023 - All Right Reserved hi</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
