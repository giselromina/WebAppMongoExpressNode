var express = require ('express');
var chalk = require ('chalk');
var debug = require ('debug')('app');
var morgan = require ('morgan');
var path = require('path');


var app = express();

app.use(morgan('tiny'));

app.get('/',function(req,res){
  res.sendfile(path.join(__dirname,'views/index.html'));

});

app.listen(3000,function(req,res){
   debug(`listening on port ${chalk.green(3000)}`);  
});
