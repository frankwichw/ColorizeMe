const router = require("express").Router();
const userController = require("../../controllers/userController.js");
const colorSchemeController = require("../../controllers/colorSchemeController.js");
const passportSetup = require('../../config/passport-setup');

// Matches with "/api/books"
router.route("/api/layout1")
    .get(colorSchemeController.findColorSchemes);

// Matches with "/api/books/:id"
router.route("/api/layout1/:id")
  .get(colorSchemeController.findById)
  .put(colorSchemeController.update)
  .post(colorSchemeController.create)
  .delete(colorSchemeController.remove);

router.route("/newuser")
  .post(userController.create);

// router.get("/google", (req, res) => {
//   res.send("logging in with google");
// });

module.exports = router;
