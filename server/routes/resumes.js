const express = require('express');
const { getResumes, getResumeById, createResume, updateResume, deleteResume } = require('../controllers/resumeController');
const auth = require('../middleware/auth');
const router = express.Router();


router.get('/', auth, getResumes);


router.get('/:id', auth, getResumeById);

router.post('/', auth, createResume);


router.put('/:id', auth, updateResume);


router.delete('/:id', auth, deleteResume);

module.exports = router;
