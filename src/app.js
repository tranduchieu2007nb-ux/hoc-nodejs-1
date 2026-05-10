const express = require('express');
const path = require('path'); // ejs

const app = express();
const PORT = 8008;

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//router
app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/user', (req, res) => {
    res.send("hell user")
})

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})