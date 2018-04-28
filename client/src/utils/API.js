import axios from "axios";

export default {
  // get all color schemes
  getUserColorSchemes: function(googleId) {
    return axios.get("/api/layout1/all/" + googleId);
  },
  // get scheme with specific id
  getcolorScheme: function(id) {
    return axios.get("/api/layout1/" + id);
  },
  // delete scheme with specific id
  deleteColorScheme: function(id) {
    return axios.delete("/api/layout1/" + id);
  },
  // saves scheme to database
  saveColorScheme: function(layout1Data) {
    console.log("getting to save color scheme route");
    return axios.post("/api/layout1", layout1Data);
  },
  // updates color scheme
  updateColorScheme: function(layout1Data, id) {
    console.log("updating api route reached");
    return axios.put("/api/layout1/" + id, layout1Data);
  }
};
