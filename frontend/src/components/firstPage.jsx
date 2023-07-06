import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function FirstPage() {
    let [name, setName] = useState("");

    function handleInputChange(event) {
        name = setName(event.target.value);
    }


    const navigate = useNavigate();

    return (
        <div class = "mycomp">
            <br />
            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>Hello,please enter your username👇</h1>
                <h2>Welcome to Co-create a Hassle-free co-authoring space!</h2>
            </div>
            <div className="container mt-5">
                <form >
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="username-input"
                            name="name"
                            placeholder="Username"
                            onChange={handleInputChange}
                        />
                    </div>
                    <br />

                     {/* setting state of name using useState, user */}
                    <button onClick={() => { navigate("/realtime", { state: { name } }) }} className="btn btn-success" type="submit">
                        Let's Go
                    </button>
                    <br/>
                    <button onClick={() => { navigate("/contact", { state: { name } }) }} className="btn btn-success" type="submit">
                        Post fields Demo
                    </button>

                </form>
            </div>
        </div>
    );
}

export default FirstPage