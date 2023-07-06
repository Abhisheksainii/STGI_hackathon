//IMPORTS
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user')
const PORT = process.env.PORT || 5000;
const db_URL = "mongodb://0.0.0.0:27017/stgi";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', true);


app.post('/signup', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    const user = await User.findOne({ email: email });
    // console.log(user)
    if (user) {
        res.json(
            1
        //    "User Already Exists"
        );
    } else {
        const newUser = new User({
            id: Math.random() * 10,
            email: email,
            password: password
        })
        await newUser.save();
        res.json(
            2
            // message: "New user created"
        );
    }


})

app.post('/login', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    const user = await User.findOne({ email: email, });
    if (user && user.password === password) {
        res.json(
            3
            // message: "Logging you in...",
        );
    } else if (user && user.password !== password) {
        res.json(
            4
            // message: "Please enter the details correctly"
        )
    }


})

const connectDB = async url => {
    await mongoose
        .connect(url)
        .then(() => console.log("Database Connected"))
        .catch(err => console.log(err));
}

//PORT LISTEN
app.listen(PORT, async () => {
    await connectDB(db_URL);
    console.log(`Server Started at port ${PORT}`);
})

