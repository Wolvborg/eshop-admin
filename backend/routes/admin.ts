import express from 'express';
import Controller from '../controller/Admin';

const router = express.Router();

/* GET home page. */
router.get('/user/:id', Controller.UserController);

export default router;
