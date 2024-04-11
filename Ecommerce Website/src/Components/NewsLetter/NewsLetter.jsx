import "./NewsLetter.css";
function NewsLetter() {
  return (
    <div className="main">
      <div className="new_letter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe Our NewLetter and Stay Updated</p>
        <div className="input_field">
          <input type="email" placeholder="Your Email Id" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
export default NewsLetter;
