

var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var Config = new Schema({
  version: Number
  // is there any other configuration we want?
});

module.exports = mongoose.model('Config', Config);

module.exports.SCHEMA_VERSION = 2;
