import { useState } from "react";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";

import '../App.css';

// PUT YOUR CLIENT SIDE HOSTED URL HERE!!
const socket = io("http://localhost:3000")
socket.on('connect', () => {
    console.log(`Connected to socket with id : ${socket.id}`)
})


function Realtime() {
    const location = useLocation();
    let [fileDetails, setDetails] = useState([]);
    let [message, setfirst] = useState()
    let [currentname, setname] = useState()

    const handleChange = (event) => {
        socket.emit('send', event.target.value);
        message = setfirst(event.target.value);

        event.target.value === "" ? socket.emit('current-name', "Nobody") : socket.emit('current-name', location.state.name);

    }

    socket.on('name', name => {
        currentname = setname(name);
    })
    socket.on('file-details', values => {
        fileDetails = setDetails(values);
    })
    socket.on('receive', value => {
        message = setfirst(value);
    })

    function uploadFile(e) {
        let file = e.target.files[0];
        console.log(file.name.substr(0, 15));

        if (file) {
            socket.emit('file-upload', [file.name, location.state.name])
        }
        e.target.value = null;
    }
    return (
        <>
            <div className="upper-div">
                <h2>Please start writing in the textarea below to share your work with other collaborators</h2>
                <textarea type="text" class="textarea" onChange={handleChange} value={message === (undefined || null) ? "" : message} />
                <br />
                <div class="form">

                    <p className="message">Message: {message}</p>
                    <input type="file" name="myfile" id="" onChange={uploadFile} />
                    <p className="message">{fileDetails.length === 0 ? "" : `${fileDetails[1]} uploaded ${fileDetails[0]}`}</p>
                    <p className="message">{currentname == (undefined || null) ? "" : `${currentname} is typing...`}</p>
                </div>
            </div>
        </>
    )
}

export default Realtime
