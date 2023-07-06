import React from 'react'
import { useState } from "react";
import axios from 'axios';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
    const [inputname, setInput] = useState('');
    const [inputemail, setInputt] = useState('');


    let [name, setName] = useState();
    let [email, setEmail] = useState();
    function handleApi(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/create',
            data: {
                name: inputname,
                email: inputemail
            },

        })
        setTimeout(function () { callAPI();callAPI2() }, 1000);

    }

    function callAPI() {
        //API request
        axios.get("http://localhost:8080/namehome").then(response => {
            // Convert the JSON string to a JavaScript object
            const names = response.data;
            console.log(names);
            name = setName(names[names.length-1]);
    

        })
    }
    function callAPI2() {
        //API request
        axios.get("http://localhost:8080/emailhome").then(response => {
            // Convert the JSON string to a JavaScript object
            const emails = response.data;
            console.log(emails);
            email = setEmail(emails[emails.length-1]);
    

        })
    }

    return (
        <div>
          <form>

            <label>User-input field for POST API</label>
            <br />
            <br/>
            <label>Name:  </label>
           <input type="username-input" className='username-input' value={inputname} onInput={e => setInput(e.target.value)} />
           <br/>
           <label>Email:  </label> 
        
            <input type="username-input" className='username-input' value={inputemail} onInput={e => setInputt(e.target.value)} />
           <br/>

             <button onClick={handleApi}>Submit</button>

             <br />

         </form>
       

<div classname='op'>

            <p className="message">Name: {name}</p>
            <p className="message">Email: {email}</p>
            </div>
        </div>
    );
}

export default Contact