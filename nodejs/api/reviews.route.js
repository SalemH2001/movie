import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/reviews/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/reviews/new").post(ReviewsCtrl.apiPostReview)
router.route("/reviews/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router