import express, { Router } from 'express';
import usersRouter from './users';

const rootRouter: Router = express.Router();

rootRouter.use('/users', usersRouter);

export default rootRouter