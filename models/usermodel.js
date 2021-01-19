var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Mobile: {
    type: String,
  },
  Balance: {
    type: String,
  },
});

var userTable = mongoose.model('users', userSchema);
module.exports = userTable;
