const mongoose = require('mongoose');

mongoose.connect("mongodb://testing:testing123@20.55.193.200:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.mongoose = mongoose
