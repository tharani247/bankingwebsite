const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
var fetchRouter = require('./routes/fetchdata');
var fetchTransfer = require('./routes/fetchtransfer');
const mongoose = require('mongoose');
const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
mongoose
  .connect(
    'mongodb+srv://s23_190031668:rani2002@cluster0.jh6ih.mongodb.net/usersdatabase?retryWrites=true&w=majoritymongodb+srv://s23_190031668:rani2002@cluster0.jh6ih.mongodb.net/usersdatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected with db');
  });

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));
app.use(express.static('views'));

app.get('/', (request, response) => {
  response.render('pages/index', { Title: 'welcome' });
});

app.use('/viewcustomers', fetchRouter);
app.use('/transfermoney', fetchTransfer);

app.get('/index', (request, response) => {
  response.render('pages/index');
});
app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
