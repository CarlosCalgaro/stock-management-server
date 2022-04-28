import express, { Router } from 'express';
import User from '../../../../models/User';

var router: Router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  let users = await User.find({});
  res.status(200).json( {users} )
});

export default router;