const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },

  lName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },

  password: {
    type: String,
    required: true,
    minlength: [8],
  },
});

module.exports = mongoose.model("CustomerInfo", customersSchema);
