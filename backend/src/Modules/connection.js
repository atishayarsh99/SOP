const mongoose = require('mongoose');

mongoose.connect(" mongodb://testing:testing123@172.172.164.205:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.mongoose = mongoose
