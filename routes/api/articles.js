const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/books"
router.route("/")
  .get(articleController.findAll)
  .post(articlesController.save)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(articleController.remove);

module.exports = router;
