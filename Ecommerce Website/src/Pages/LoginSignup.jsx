import './CSS/LoginSignup.css';

function LoginSignup() {
  return (
    <>
      <div className="loginSignupMain">
        <h2 className="signup">Sign Up</h2>
        <div className="inputField">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="continue_btn">Continue</button>
        <footer>
          <p>
            Already have an account? <span>Login here</span>
          </p>
          <input type="checkbox" id='check'/> <label htmlFor="check">By continuing, I agree to the terms of use &
          privacy policy. </label>
        </footer>
      </div>
    </>
  );
}
export default LoginSignup;
