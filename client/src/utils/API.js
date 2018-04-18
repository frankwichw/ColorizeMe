import axios from "axios";

export default {
  // Gets all books
  getColorSchemes: function() {
    return axios.get("/api/layout1");
  },
  // Gets the book with the given id
  getcolorScheme: function(id) {
    return axios.get("/api/layout1/" + id);
  },
  // Deletes the book with the given id
  deleteColorScheme: function(id) {
    return axios.delete("/api/layout1/" + id);
  },
  // Saves a book to the database
  saveColorScheme: function(layout1Data) {
    return axios.post("/api/layout1", layout1Data);
  }
};
