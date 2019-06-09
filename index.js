
process.env.DB_URI = "mongodb://root:root@travel28-shard-00-00-p6la4.mongodb.net:27017,travel28-shard-00-01-p6la4.mongodb.net:27017,travel28-shard-00-02-p6la4.mongodb.net:27017/acmetravel?ssl=true&replicaSet=travel28-shard-0&authSource=admin&retryWrites=true&w=majority"

var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router();
require('./api/v1/vacations')(router);

// Create the express app
app = express();
// Setup the body parser
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());//{type: '*/*'}));

// Setup the app to use the router
app.use(router);

// Start the listener
app.listen(3000);
console.log('Listening on 3000')

