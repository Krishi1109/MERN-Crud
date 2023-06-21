import React, {useState} from 'react'
import signup from "../images/signup.jpg"
import { NavLink, useHistory} from 'react-router-dom'

const Signup = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
    let name, value;
    const handleInputs = (event) => {
        name = event.target.name
        value = event.target.value

        setUser({...user, [name]:value})
    }

    const PostData = async (event) => {
        event.preventDefault()

        const {name,email,phone,work,password,cpassword} = user

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        const data = await res.json()

        if(res.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("invalid");
        } else {
            window.alert("Success Registration")
            console.log("Success");
            history.push("/login")
        }
    }

    

    return (
        <div classNameName="main">
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image ">
                        <figure><img src={signup} alt="sing up image" /></figure>
                        <NavLink to="/" className="signup-image-link">Create an account</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"></label>
                                <input type="text" name="name" id="name" value={user.name}
                                onChange={handleInputs} placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="email"></label>
                                <input type="email" name="email" id="email" value={user.email}
                                onChange={handleInputs} placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label for="phone"></label>
                                <input type="email" name="phone" id="phone" value={user.phone}
                                onChange={handleInputs} placeholder="Your Phone"/>
                            </div>
                            <div className="form-group">
                                <label for="work"></label>
                                <input type="text" name="work" id="work" value={user.work}
                                onChange={handleInputs} placeholder="Your Profession"/>
                            </div>
                            <div className="form-group">
                                <label for="password"></label>
                                <input type="password" name="password" id="password" value={user.password}
                                onChange={handleInputs} placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="cpassword"></label>
                                <input type="password" name="cpassword" id="cpassword" value={user.cpassword}
                                onChange={handleInputs} placeholder="Confirm password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <NavLink to="#" className="term-service">Terms of service</NavLink></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData} />
                            </div>
                        </form>
                        <div className="social-login">
                            {/* <span className="social-label">Or login with</span> */}
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
    )
}

export default Signup
