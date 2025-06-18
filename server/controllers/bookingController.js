

export const getCheckoutSession = async (req, res) => {
  try {
    // Find doctor and user from DB
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    if (!doctor || !user) {
      return res.status(404).json({ message: 'Doctor or user not found' });
    }

    // Validate ticketPrice
    const price = Number(doctor.ticketPrice);
    if (!price || isNaN(price) || price <= 0) {
      return res.status(400).json({ message: 'Invalid ticket price for the doctor.' });
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
            unit_amount: price * 100, // Convert to smallest currency unit (paise)
            product_data: {
              name: doctor.name,
              description: doctor.bio,
              images: [doctor.photo], // Ensure this is a full URL to the image
            },
          },
          quantity: 1,
        },
      ],
    });

    // Create booking in DB with status 'pending'
    // Change from 'price' to 'ticketPrice' to match the schema requirement
    const booking = await Booking.create({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: price,  // Changed from 'price' to 'ticketPrice'
      status: 'pending',
      sessionId: session.id,
    });

    // Return session and booking info to frontend
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