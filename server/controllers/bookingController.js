import Stripe from 'stripe';
// import Doctor from '../models/doctorModel';
// import User from '../models/userModel';
// import Booking from '../mode'; // Make sure this exists and is imported
import User from "../models/UserSchema.js";
import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const getCheckoutSession = async (req, res) => {
  try {
    // Get doctor and user
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    if (!doctor || !user) {
      return res.status(404).json({ message: 'Doctor or user not found' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: [
        {
          price_data: {
            currency: 'INR',
            unit_amount: doctor.ticketPrice * 100, // e.g., 500 BDT -> 50000 paisa
            product_data: {
              name: doctor.name,
              description: doctor.bio,
              images: [doctor.photo], // Ensure it's a full image URL
            },
          },
          quantity: 1,
        },
      ],
    });

    // Create a new booking in your database
    const booking = await Booking.create({
      doctor: doctor._id,
      user: user._id,
      price: doctor.ticketPrice,
      status: 'pending',
      sessionId: session.id,
    });

    res.status(200).json({ session, booking });
  } catch (err) {
    console.error('Error in getCheckoutSession:', {
      message: err.message,
      stack: err.stack,
    });

    res.status(500).json({
      message: 'An error occurred while creating the checkout session and booking. Please try again later.',
      error: err.message,
    });
  }
};