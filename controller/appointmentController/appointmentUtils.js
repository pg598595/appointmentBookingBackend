const appointment = require('../../model/appointmentModel');

const createAppointment = async (appointmentBody) => {
    console.log("Created by=== ",appointmentBody.createdBy),
    console.log("Booked for===",appointmentBody.createdFor),
    console.log("Appointment DateTime===", appointmentBody.AppointmentTime),
    console.log("Status===",appointmentBody.appointmentstatus)
    return appointment.create(appointmentBody);
};


const modifyAppointment = async (appointmentBody) => {
  console.log("New Appointment dateTime===",NewAppointmentTime)
  return appointment.findOne({appointmentBody});
};

const cancelAppointment = async (appointmentBody) => {
    console.log("Reason===",reason)
    return appointment.findOne({appointmentBody});
  };


module.exports = {
    createAppointment,
    modifyAppointment,
    cancelAppointment,
    
};
