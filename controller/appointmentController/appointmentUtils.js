const appointment = require('../../model/appointmentModel');
const bson = require('bson');

const createAppointment = async (appointmentBody) => {
  console.log("Created by=== ", appointmentBody.createdBy),
    console.log("Booked for===", appointmentBody.createdFor),
    console.log("Appointment DateTime===", appointmentBody.AppointmentTime),
    console.log("Status===", appointmentBody.appointmentstatus)
  return appointment.create(appointmentBody);
};


const modifyAppointment = async (appointmentBody) => {
  console.log("New Appointment dateTime===", NewAppointmentTime)
  return appointment.findOne({ appointmentBody });
};

const cancelAppointment = async (appointmentBody) => {
  console.log("Reason===", reason)
  return appointment.findOne({ appointmentBody });
};

//To get appoitment Listing For User
const getAppointmentListingForUser = async (userId) => {
  console.log("Getting appointment Listing with user id===", userId)
  return appointment.aggregate([
    { $match: { createdBy: bson.ObjectId(userId) } },
    {
      $lookup: {
        from: "users",
        localField: "createdFor",
        foreignField: "_id",
        as: "doctorDetails",
      },
    },

    {
      $unwind: {
        path: "$doctorDetails",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "specification",
        localField: "doctorDetails.specification",
        foreignField: "_id",
        as: "specificationDetails",
      },
    },
    {
      $unwind: {
        path: "$specificationDetails",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);
};

//To get appoitment Listing For Doctor
const getAppointmentListingForDoctor = async (userId) => {
  console.log("Getting appointment Listing with user id===", userId)
  return appointment.aggregate([
    { $match: { createdFor: bson.ObjectId(userId) } },
    {
      $lookup: {
        from: "users",
        localField: "createdBy",
        foreignField: "_id",
        as: "userDetails",
      },
    },

    {
      $unwind: {
        path: "$userDetails",
        preserveNullAndEmptyArrays: true,
      },
    },

  ]);
};


module.exports = {
  createAppointment,
  modifyAppointment,
  cancelAppointment,
  getAppointmentListingForUser,
  getAppointmentListingForDoctor
};
