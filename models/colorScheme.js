// color scheme layout 1 model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Layout1Schema = new Schema({
  title: { 
      type: String, 
      required: true 
  },
  background: { 
    type: String, 
    required: true 
  },
  navbar: { 
    type: String, 
    required: true 
  },
  right_sidebar: { 
    type: String, 
    required: true 
  },
  left_sidebar: { 
    type: String, 
    required: true 
  }  
});

const Layout1 = mongoose.model("Layout1", Layout1Schema);

module.exports = Layout1;