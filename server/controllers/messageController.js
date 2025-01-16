import Message from '../models/Message.js';
import { validationResult } from 'express-validator';
import { sendEmail } from '../utils/email.js';

// Send message
export const sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const message = new Message(req.body);
    await message.save();

    // Send notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      text: `New message from ${req.body.name} (${req.body.email}): ${req.body.message}`,
    });

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};