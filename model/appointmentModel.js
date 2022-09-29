const mongoose = require('mongoose');
const validator = require('validator');
const { options } = require('../routes/routes');

const appointmentSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId
    },
    createdFor: {
      type: mongoose.Schema.Types.ObjectId
    },
    appointmentTime: {
      type: Date
    },
    appointmentStatus: {
      type: String
    },


  },
  {
    timestamps: true,
  }
);

const appointment = mongoose.model('appointment', appointmentSchema);

module.exports = appointment;
