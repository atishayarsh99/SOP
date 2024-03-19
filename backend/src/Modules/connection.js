const mongoose = require('mongoose');

mongoose.connect("mongodb://testing:testing123@20.84.104.134:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.mongoose = mongoose
