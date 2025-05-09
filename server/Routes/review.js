import express from "express";
import { getAllReviews, createReview } from "../reviewController.js";
import { authenticate, restrict } from "./../auth/verifyToken.js";

const router = express.Router({mergeParams: true});
// /doctor/doctorID/reviews

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview);

export default router;
