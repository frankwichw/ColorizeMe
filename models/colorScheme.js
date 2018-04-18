// color scheme layout 1 model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Layout1Schema = new Schema({
  userId: {
      type: String,
      required: true
  },
  title: { 
      type: String, 
      required: true 
  },
  
});

const Layout1 = mongoose.model("Layout1", Layout1Schema);

module.exports = Layout1;