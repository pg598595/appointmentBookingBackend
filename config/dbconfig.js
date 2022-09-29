const mongoose = require('mongoose');
// const config = require('../../src/config/config');

module.exports = {
  connection: mongoose.connect("mongodb+srv://priyankagupta43:Priyanka%40123@123%40cluster0.gmxkcno.mongodb.net/appoitmentBooking?retryWrites=true&w=majority")
      .then(() => {
          console.log("Connected!");
      })
      .catch(err => {
          console.log("Error in Database connection::", err);
          process.exit();
      })
};
