import express, { Router } from 'express';
import UsersController from '../../../../controllers/api/v1/users';

var router: Router = express.Router();

const controller = new UsersController();

/* GET home page. */
router.get('/', controller.index);

router.post('/', controller.post);

export default router;