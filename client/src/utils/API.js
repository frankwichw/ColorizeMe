import axios from "axios";

export default {
  // Gets all books
  getColorSchemes: function() {
    return axios.get("/api/colorschemes");
  },
  // Gets the book with the given id
  getcolorScheme: function(id) {
    return axios.get("/api/colorschemes/" + id);
  },
  // Deletes the book with the given id
  deleteColorScheme: function(id) {
    return axios.delete("/api/colorschemes/" + id);
  },
  // Saves a book to the database
  saveColorScheme: function(bookData) {
    return axios.post("/api/colorschemes", bookData);
  }
};
