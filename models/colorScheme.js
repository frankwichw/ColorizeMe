// color scheme model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  userId: {
      type: String,
      required: true
  },
  title: { 
      type: String, 
      required: true 
  }
});

const ColorScheme = mongoose.model("ColorScheme", colorSchema);

module.exports = ColorScheme;