const express = require('express');
const path = require('path'); // ejs
require('dotenv').config();
const getrouter = require('./router/web');
const connection = require('./config/database');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8099;

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//router
app.use('/', getrouter);

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'hieudzai' });

cat.save();

(async() => {
     //connect database
      try {
          await connection();
          app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})
      } catch (error) {
        console.log(">>>Error connect to db : ", error)
      }
})()
