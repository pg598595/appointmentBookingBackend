const appointmentUtils = require("./appointmentUtils")
// const userUtils = require("./userUtils")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const appointment = require("../../model/appointmentModel");

const createAppointment = async (req, res) => {    

  const {createdBy, createdFor, appointmentTime} = req.body;
  if (!appointmentTime || !createdBy || !createdFor) {
    return res.status(400).json({
        message: 'createdBy, createdFor and appointmentDate are required',
    });
  }

const response = await appointmentUtils.createAppointment(req.body);
if (!response) {
  throw new ApiError(httpStatus.NOT_FOUND, response);
}
res.send(response);
}

const modifyAppointment = async (req, res) => {
    const{id}=req.params;
    const _id =ObjectId(id);
  req.collection.modifyAppointment({_id})
  .then(result => res.json(result))
  .catch(error => res.send(error));
  res.send(response);
}

const cancelAppointment = async (req, res) => {
  const{id}=req.params;
  const _id =ObjectId(id);
  req.collection.deleteOne({_id})
  .then(result => res.json(result))
  .catch(error => res.send(error));
  res.send(response);

}

module.exports = {
  createAppointment,
  modifyAppointment,
  cancelAppointment,
}