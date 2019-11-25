var express = require ('express');
var chalk = require ('chalk');
var debug = require ('debug')('app');
var morgan = require ('morgan');

var app = express();

app.use(morgan('tiny'));

app.get('/',function(req,res){
  res.send('hellow from library');

});

app.listen(3000,function(req,res){
   debug(`listening on port ${chalk.green(3000)}`);  
});
