import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value); // Validate email format
      },
      message: 'Please provide a valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  refreshToken: {
    type: String,
  },
});


const User=mongoose.model('User',UserSchema);

export default User;