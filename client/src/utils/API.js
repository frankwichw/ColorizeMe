import axios from "axios";

export default {
  // **** layout 1 **** //
  // get all layout1 color schemes
  getUserColorSchemes1: function(googleId) {
    return axios.get("/api/layout1/all/" + googleId);
  },
  // get layout1 scheme with specific id
  getcolorScheme1: function(id) {
    return axios.get("/api/layout1/" + id);
  },
  // delete layout1 scheme with specific id
  deleteColorScheme1: function(id) {
    return axios.delete("/api/layout1/" + id);
  },
  // saves layout1 scheme to database
  saveColorScheme1: function(layout1Data) {
    return axios.post("/api/layout1", layout1Data);
  },
  // updates layout1 color scheme
  updateColorScheme1: function(id, layout1Data) {
    return axios.put("/api/layout1/" + id, layout1Data);
  },
  // **** layout 2 **** //
  // get all layout2 color schemes
  getUserColorSchemes2: function(googleId) {
    console.log("getting to get all color schemes for layout 2");
    return axios.get("/api/layout2/all/" + googleId);
  },
  // get layout1 scheme with specific id
  getcolorScheme2: function(id) {
    return axios.get("/api/layout2/" + id);
  },
  // delete layout1 scheme with specific id
  deleteColorScheme2: function(id) {
    return axios.delete("/api/layout2/" + id);
  },
  // saves layout1 scheme to database
  saveColorScheme2: function(layout2Data) {
    console.log("getting to save color schemes for layout 2");
    return axios.post("/api/layout2", layout2Data);
  },
  // updates layout1 color scheme
  updateColorScheme2: function(id, layout2Data) {
    return axios.put("/api/layout2/" + id, layout2Data);
  }
};
