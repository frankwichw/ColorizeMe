// user model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: { 
    type: String, 
    required: true 
  },
  colorSchemes: [
      {
        type: Schema.Types.ObjectId,
        ref: "ColorScheme"
      }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;