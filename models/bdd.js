// Do not forget to store your new request module in a variable in order to use it
const mongoose = require('mongoose');

var user = 'master';
var password = 'master123';
var port = 13599;
var bddname = 'weatherapp';

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(
  'mongodb://' +
    user +
    ':' +
    password +
    '@ds013599.mlab.com:' +
    port +
    '/' +
    bddname,
  options,
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.info('connexion ok');
    }
  }
);

module.exports = mongoose;
