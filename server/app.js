/*
cd "C:\Users\grant\Documents\GitHub\Lab05-Bever"
*/
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let userRoute = require('./route/userRoute');
let postRoute = require('./route/postRoute');
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: 'C:/Users/grant/Documents/GitHub/Lab05-Bever/client/views' })
})
app.get('/signin', function (req, res) {
    res.sendFile('signin.html', {root: 'C:/Users/grant/Documents/GitHub/Lab05-Bever/client/views' })
})
app.get('/signup', function (req, res) {
    res.sendFile('signup.html', {root: 'C:/Users/grant/Documents/GitHub/Lab05-Bever/client/views' })
})
app.get('/home', function (req, res) {
    res.sendFile('home.html', {root: 'C:/Users/grant/Documents/GitHub/Lab05-Bever/client/views' })
})
app.listen(1337, () => console.log('Lights out and away we go'));

app.use(express.static('client/public'));
