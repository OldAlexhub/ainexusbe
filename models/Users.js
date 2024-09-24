import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  fname: { type: String },
  lname: { type: String },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: `Emails not right!`,
    },
  },
  password: { type: String, minlength: 6, required: true },
  confirmPassword: {
    type: String,
    select: false,
    default: undefined,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: `Passwords don't match!`,
    },
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
