const express = require('express');
const path = require('path'); // ejs
require('dotenv').config();
const getrouter = require('./router/web');

const app = express();
const PORT = process.env.PORT || 8099;

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//router
app.use('/', getrouter);

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})