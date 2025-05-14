


import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile,
} from "../controllers/doctorController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from './review.js';

const router = express.Router();


// nested route
router.use('/:doctorId/reviews', reviewRouter);

// ✅ Get all users
router.get("/", getAllDoctor);       

// ✅ Get a single user by ID
router.get("/:id", getSingleDoctor);        

// ✅ Update user by ID
router.put("/:id",authenticate, restrict(['doctor']), updateDoctor);            

// ✅ Delete user by ID
router.delete("/:id",authenticate, restrict(['doctor']), deleteDoctor);   

// router.get("/profile/me",authenticate, restrict(['doctor']), getDoctorProfile); 

router.get("/profile/me", authenticate, restrict(['doctor']), getDoctorProfile);



export default router;
