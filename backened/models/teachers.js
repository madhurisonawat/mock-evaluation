const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
  teacher_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  gender: {
    type: String,
    required: true,
    min: 4,
  },
  age: {
    type: Number,
    required: true,
    min: 2,
  },
  class: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Teachers', teacherSchema)