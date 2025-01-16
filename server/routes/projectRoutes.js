import express from 'express';
import { getProjects, getProject, createProject } from '../controllers/projectController.js';
import { upload } from '../middleware/upload.js';
import { validateProject } from '../middleware/validators.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', upload.single('image'), validateProject, createProject);

export default router;