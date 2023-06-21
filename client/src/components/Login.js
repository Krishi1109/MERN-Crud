import React, { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import login from "../images/login.jpg";

const Login = () => {

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault()

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
          "Content-type" : "application/json"
      },
      body: JSON.stringify({
          email,password
      })
  });

  const data = await res.json()

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials")
            console.log("invalid");
        } else {
            window.alert("Login Successfull")
            console.log("Success");

            history.push("/")
        }
  }
  
  return (
    <div classNameName="main">
      <section className="sign-in pt-4">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={login} alt="sing up image" />
              </figure>
              <NavLink to="/" className="signup-image-link">
                Create an account
              </NavLink>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Login</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label for="your_name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="eamil"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label for="your_pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label for="remember-me" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    Remember me
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                    onClick={loginUser}
                  />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  {/* <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-facebook"></i></NavLink></li>
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-twitter"></i></NavLink></li>
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-google"></i></NavLink></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
