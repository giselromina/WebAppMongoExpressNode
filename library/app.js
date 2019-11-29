const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();
const authorRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');

bookRouter.route('/')
.get((req,res)=>{
  res.send('Hello Books');
});
bookRouter.route('/single')
.get((req,res)=>{
  res.send('hello single books');
});

authorRouter.route('/').
get((req,res)=>{
res.send('Hello Authors');
});

authorRouter.route('/singleAuthor').
get((req,res)=>{
  res.send('Hello single Author');
});

app.use('/books', bookRouter);
app.use('/authors',authorRouter);
app.get('/', (req, res) => {
  res.render('index', 
  {
     navs: [
            {link:'/books', title:'Books'},
            {link:'/authors',title:'Authors'}
     ],
     title: 'Made for Gisel'  
  }
     );
});
app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
