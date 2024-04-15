const { configDotenv } = require('dotenv');
const express = require('express');
const app = express();
const homeRoute = require('./routes/homePageRoute.js');
const addTaskRoute = require('./routes/addTaskRoute.js');
const env = require('dotenv').config();
const path = require('path');
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "../client/views/"));
app.use(express.static(path.join(__dirname, '../client/public/')));

app.use('/', homeRoute);
app.use('/addTask', addTaskRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})


