const appointmentUtils = require('../appointmentController/appointmentUtils');


const getAppointmentListingForUser = async (req, res) => {
    const listAppoitmentList = await appointmentUtils.getAppointmentListingForUser(req.body.userId)
    
    if (!listAppoitmentList) {
        return res.status(400).json({
            error: "No appoitments found"
          })
    }
    res.send(listAppoitmentList);
}


const getAppointmentListingForDoctor = async (req, res) => {
    const listAppoitmentList = await appointmentUtils.getAppointmentListingForDoctor(req.body.userId)
    if (!listAppoitmentList) {
        return res.status(400).json({
            error: "No appoitments found"
          })
    }
    res.send(listAppoitmentList);
}

module.exports = {
    getAppointmentListingForUser,
    getAppointmentListingForDoctor
};
