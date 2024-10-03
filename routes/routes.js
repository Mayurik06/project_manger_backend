import express from 'express';
import { signup } from '../controller/signup.js';
import { login } from '../controller/login.js';
import {logout} from '../controller/logout.js';
import { createProject, getProjects } from '../controller/project.js';
import { getDetailProject } from '../controller/getDetailProject.js';
import { updateStatus } from '../controller/updateStatus.js';
import { getProjectStatus } from '../controller/getProjectStatus.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.post('/createProject',createProject);
router.get('/getProjects',getProjects);
router.get('/getDetailProject',getDetailProject);
router.patch('/updateStatus/:id',updateStatus);
router.get('/getProjectStatus',getProjectStatus);

export default router;