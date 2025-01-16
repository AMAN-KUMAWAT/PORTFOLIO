import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: [{
    type: String,
  }],
  image: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
  },
  liveUrl: {
    type: String,
  },
}, {
  timestamps: true,
});