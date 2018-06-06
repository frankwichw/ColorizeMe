const router = require("express").Router();
const userController = require("../../controllers/userController.js");
const colorSchemeController = require("../../controllers/colorSchemeController.js");
const colorScheme2Controller = require("../../controllers/colorScheme2Controller.js");

// matches with "/api/layout1"
router.route("/layout1")
    .get(colorSchemeController.findColorSchemes)
    .post(colorSchemeController.create);

// matches with "/api/layout1/:id"
router.route("/layout1/:id")
  .get(colorSchemeController.findById)
  .put(colorSchemeController.update)
  .delete(colorSchemeController.remove);

// matches with "/api/layout1/:googleid"
router.route("/layout1/all/:googleid")
  .get(colorSchemeController.findByGoogleId);

// LAYOUT 2 ROUTES //
// matches with "api/layout2"
router.route("/layout2")
  .get(colorScheme2Controller.findColorSchemes)
  .post(colorScheme2Controller.create);

// Matches with "/api/books/:id"
router.route("/layout2/:id")
  .get(colorScheme2Controller.findById)
  .put(colorScheme2Controller.update)
  .delete(colorScheme2Controller.remove);

// matches with "/api/layout1/:googleid"
router.route("/layout2/all/:googleid")
  .get(colorScheme2Controller.findByGoogleId);


// router.route("/signup")
//   .post(userController.create);

module.exports = router;
