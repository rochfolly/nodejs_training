var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());
app.use(express.static('./public'));

app.get('/hello', (req, res) => {
    console.log(req.query);
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    var data = req.body;
    res.send(`
    <h1>Formulaire envoyé avec les données :</h1>
    <p>${data.username} / ${data.password} / ${data.date}</p>
    `);
});

app.listen(3000, () => {
  console.log('Example app listening on port http://localhost:3000');
});