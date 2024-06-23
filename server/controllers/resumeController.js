const User = require('../models/User');

exports.getResumes = async (req, res) => {
  try {
    const resumes = await User.find({}).select('resume');
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getResumeById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('resume');
    if (!user) {
      return res.status(404).json({ msg: 'Resume not found' });
    }
    res.json(user.resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createResume = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    mobileNumber,
    experiences,
    projects,
    hobbies,
    socialMediaUrls,
  } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.resume = {
      firstName,
      lastName,
      email,
      address,
      mobileNumber,
      experiences,
      projects,
      hobbies,
      socialMediaUrls,
    };

    await user.save();
    res.json(user.resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateResume = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    mobileNumber,
    experiences,
    projects,
    hobbies,
    socialMediaUrls,
  } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.resume = {
      firstName,
      lastName,
      email,
      address,
      mobileNumber,
      experiences,
      projects,
      hobbies,
      socialMediaUrls,
    };

    await user.save();
    res.json(user.resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteResume = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Resume removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
