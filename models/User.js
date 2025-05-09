const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  class: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', UserSchema);