const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

router.route("/:movieId/reviews").get(controller.getMovieReview).all(methodNotAllowed)
router.route("/:movieId/theaters").get(controller.getTheaterName).all(methodNotAllowed)
router.route("/:movieId").get(controller.read).all(methodNotAllowed)
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
