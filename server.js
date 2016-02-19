//Standard express setup
var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('./server/config/mongoose.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));


require('./server/config/routes.js')(app)

//(app) comes from var app = express();

// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!


app.listen(8000, function(){
  console.log("listening on port 8000");
});
