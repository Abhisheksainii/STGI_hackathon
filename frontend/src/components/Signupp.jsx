import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './Signup.css'; // Import the CSS file with necessary styles
// import FirstPage from './components/firstPage';

function Sign() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsRightPanelActive(isRightPanelActive => !isRightPanelActive);
    };
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notify = (message) => toast( message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    async function submit1(e) { //signup
        e.preventDefault();
      

        try {

            await axios.post("http://localhost:5000/signup", {
                email, password  // payload
            })
                .then(res => {
                    console.log(res.data);
                    // const response = JSON.stringify(res.data);
                    // console.log(response)
                    if (res.data == 1) {
                        console.log("user already exists")
                        notify("Please use a different E-mail Id")
                    }
                    else if (res.data == 2) {
                        history("/Home", { state: { id: email } })
                        console.log("new user created")
                    }
                    else {
                        console.log("still error")
                    }
                })
                .catch(e => {
                    notify("❌ wrong details entered")
                    console.log(e);
                })


        }
        catch (e) {
            console.log(e);

        }

    }

    async function submit2(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/login", {
                email, password
            })
                .then(res => {
                    console.log(res.data);

                    if (res.data == 4) {

                        notify("Please enter details correctly")
                        // alert("Please enter details correctly")
                    }
                    else if (res.data == 3) {
                        // Logging you in...
                        history("/Home", { state: { id: email } })
                    }
                    else if(res.data == 5){
                        notify("Please Signup!")
                    }
                })
                .catch(e => {
                    // alert("Please signu
                    notify("Please Signup!")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);


        }
    }
    return (



        <div classNameName="container">

            <div className={isRightPanelActive ? 'right-panel-active container' : 'left-panel-active container'} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <form action="POST">
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            {/* <input type="submit" onClick={submit} /> */}

                        </form>
                        <button onClick={submit1}>   Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <form action="POST">
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            {/* <input type="submit" onClick={submit} /> */}

                        </form>
                        {/* <button className="ghost" id="signUp">Login</button>
               */}



                        {/* <a href="#">Forgot your password?</a> */}
                        <button onClick={submit2} >Sign In</button>

                    </form>
                </div>


                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>

    );
}

export default Sign;



