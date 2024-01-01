const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
    },

    email: {
      type: String,
      required: true,
      minlength: 10,
    },

    password: {
      type: String,
      required: true,
      minlength: 10,
    },
  },
  {
    minimize: true,
    timestamps: true,
  }
);

const UserModel = model('user', UserSchema);

module.exports = { UserModel };
