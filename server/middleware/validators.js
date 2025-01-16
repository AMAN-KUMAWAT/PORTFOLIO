import { body } from 'express-validator';

export const validateProject = [
  body('title').notEmpty().trim().escape(),
  body('description').notEmpty().trim(),
  body('technologies').isArray(),
  body('githubUrl').optional().isURL(),
  body('liveUrl').optional().isURL(),
];

export const validateMessage = [
  body('name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('message').notEmpty().trim().escape(),
];