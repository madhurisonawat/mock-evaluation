const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
