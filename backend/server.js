const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// app.use(bodyParser);

//use cors to allow cross origin resource sharing
app.use(
  cors()
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let usernames = [];
let emails = [];

app.get('/namehome', function (req, res) {
  console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('usernames : ', JSON.stringify(usernames));


  res.end(JSON.stringify(usernames));
});
app.get('/emailhome', function (req, res) {
  // console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('emails : ', JSON.stringify(emails));
  res.end(JSON.stringify(emails));
});
app.post('/create', function (req, res) {
  const username = req.body.name;
  console.log(`${username == (undefined || null) ? "NULL" : username}`)

  const email = req.body.email;
  console.log(`${email == (undefined || null)? "NULL": email}`)
  


  usernames.push(username);
  emails.push(email);

  console.log(usernames);
  console.log(emails);
});
//start your server on port 3001
app.listen(8080, () => {
  console.log('Server Listening on port 8080');
});