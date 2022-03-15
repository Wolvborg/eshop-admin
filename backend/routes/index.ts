import express from 'express';
import Controller from '../controller/Home';

const router = express.Router();

/* GET home page. */
router.get('*', Controller.HomeViewController);

export default router;
