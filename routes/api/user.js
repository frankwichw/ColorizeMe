const router = require("express").Router();
const userController = require("../../controllers/userController.js");
const colorSchemeController = require("../../controllers/colorSchemeController.js");

// Matches with "/api/books"
router.route("/layout1")
    .get(colorSchemeController.findColorSchemes)
    .post(colorSchemeController.create);

// Matches with "/api/books/:id"
router.route("/layout1/:id")
  .get(colorSchemeController.findById)
  .put(colorSchemeController.update)
  .delete(colorSchemeController.remove);

router.route("/layout1/all/:googleid")
  .get(colorSchemeController.findByGoogleId);

router.route("/signup")
  .post(userController.create);

module.exports = router;
