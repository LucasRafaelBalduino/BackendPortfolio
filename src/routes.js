const { Router } = require('express');
const multer = require('multer');

// const multerGoogleStorage =require( 'multer-google-storage';
const ProjectController = require('./controllers/ProjectController');
const uploadConfig = require('./config/upload');


const router = Router();
const upload = multer(uploadConfig);


router.post('/create-project', upload.single('image'), ProjectController.store);

router.get('/create-project', ProjectController.index);

router.put('/create-project/:id', ProjectController.update);

router.delete('/create-project/:id', ProjectController.delete);


module.exports = router;
