const router = require("express").Router();
const userController = require("../../controllers/userController.js");
const colorSchemeController = require("../../controllers/colorSchemeController.js");

// Matches with "/api/books"
router.route("/api/colorschemes")
    .get(colorSchemeController.findColorSchemes);

// Matches with "/api/books/:id"
router.route("/api/colorschemes/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


module.exports = router;
