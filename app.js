var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tradeapp', (err, res) => {
  if (err) throw err;
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

require('./models/product')(app, mongoose);
require('./models/user')(app, mongoose);
require('./models/trade-product')(app, mongoose);
var ProductCtrl = require('./controllers/products');
var UserCtrl = require('./controllers/users');
var TradeProductCtrl = require('./controllers/trade-products');
var router = express.Router();

router.route('/products')
  .get(ProductCtrl.findAll)
  .post(ProductCtrl.add);

router.route('/products/:id')
  .get(ProductCtrl.findById)
  .put(ProductCtrl.update)
  .delete(ProductCtrl.delete);

router.route('/users')
  .get(UserCtrl.findAll)
  .post(UserCtrl.add);

router.route('/users/:id')
  .get(UserCtrl.findById)
  .delete(UserCtrl.delete);

router.route('/trade-products')
  .get(TradeProductCtrl.findAll)
  .post(TradeProductCtrl.add);

router.route('/trade-products/:id')
  .get(TradeProductCtrl.findById)
  .put(TradeProductCtrl.update)
  .delete(TradeProductCtrl.delete);

app.use('/api', router);

app.listen(3000, () => console.log("Node server running on http://localhost:3000"));