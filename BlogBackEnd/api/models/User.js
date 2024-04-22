const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    minlenght: 5,
    maxlenght: 100,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlenght: 5,
    maxlenght: 200,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    minlenght: 5,
    maxlenght: 200,
  },
  role: {
    type: String,
    enum: ["admin", "recruiter", "user"],
    default: "user",
  },
  image: {
    type: String,
    trim: true,
    required: true,
    minlenght: 5,
    maxlenght: 200,
  },
},
  {
    timestamps: true
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;






