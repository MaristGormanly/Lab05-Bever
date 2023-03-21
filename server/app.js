//$ cd "C:\Users\grant\Documents\GitHub\Lab05-Bever"
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: 'C:/Users/grant/Documents/GitHub/Lab05-Bever/client/views' })
})
app.get('/signin', function (req, res) {
    res.sendFile('signin.html', {root: 'C:/Users/grant/Documents/GitHub/Lab05-Bever/client/views' })
})
app.listen(1337, () => console.log('Lights out and away we go'));

app.use(express.static('client/public'));
