import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="Logging you in..."){
                    alert("Logging you in...")
                }
                else if(res.data=="Please enter the details correctly"){
                    // history("/home",{state:{id:email}})
                    alert("Please enter the details correctly")
                }
                else if(res.data == "Please Sign Up"){
                    alert("Please Sign Up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
}

export default Login