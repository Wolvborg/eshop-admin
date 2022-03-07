import express from 'express';
import path from 'path';

const router = express.Router();

/* GET home page. */
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

export default router;
