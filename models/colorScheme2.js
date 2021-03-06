// color scheme layout 2 model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Layout2Schema = new Schema({
  title: { 
      type: String, 
      required: true 
  },
  google_id: {
      type: String,
      required: true
  },
  layout_type: {
    type: String,
    required: true
  },
  background: { 
    type: String, 
    required: true 
  },
  left_sidebar: { 
    type: String, 
    required: true 
  }  
});

const Layout2 = mongoose.model("Layout2", Layout2Schema);

module.exports = Layout2;