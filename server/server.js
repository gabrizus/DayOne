const { configDotenv } = require('dotenv');
const express = require('express');
const app = express();
const env = configDotenv();
const path = require('path');
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "../client/views/"));
app.use(express.static(path.join(__dirname, '../client/public/')));

app.use('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`App listening on port : ${port}`);
})
