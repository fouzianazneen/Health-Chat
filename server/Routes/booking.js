import express from 'express';
import { authenticate } from '../auth/verifyToken.js';
import { getCheckoutSession } from '../controllers/bookingController.js';
// import { verifyToken } from '../auth/verifyToken.js';


const router = express.Router();

router.post('/checkout-session/:doctorId', authenticate, getCheckoutSession)

export default router;
