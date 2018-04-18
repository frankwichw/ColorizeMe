// user model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: { 
    type: String, 
    required: true 
  },
  Layout1Schemes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Layout1"
      }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;