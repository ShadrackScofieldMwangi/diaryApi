'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: "What are your plans today?"
  },
  created_on:{
    type: Date,
    default: Date.now
  },
  diary_entry_status: {
    type: [
      {
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }
    ],
    default: ['pending']
  }
});

module.exports = mongoose.model('diary_entries', TaskSchema)
