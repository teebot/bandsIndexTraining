const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded());
app.use(express.static('static'));

const data = require('./data/bandsIndex.json');

app.get('/api/bands/:bandId', (req, res) => {
    const band = data.bands.find(b => b.id === parseInt(req.params.bandId));
    res.json(band);
});

app.get('/api/bands', (req, res) => {
    res.json(data.bands);
});

app.get('*', (req, res) => {
    res.render('index');
});

app.listen(8088, () => console.log('Server started'));