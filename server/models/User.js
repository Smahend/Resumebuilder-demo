const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
  description: String,
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

const resumeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: String,
  mobileNumber: String,
  experiences: [experienceSchema],
  projects: [projectSchema],
  hobbies: [String],
  socialMediaUrls: [String],
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  resume: resumeSchema,
});

module.exports = mongoose.model('User', userSchema);
