import express from 'express';
import Controller from '../controller/Admin';

const router = express.Router();

/**
 * User Signup route
 */
router.post('/signup', Controller.UserController);

export default router;
