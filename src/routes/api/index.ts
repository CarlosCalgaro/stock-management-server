import express, { Router } from 'express';
import v1Router from './v1/';

const rootRouter: Router = express.Router();

rootRouter.use('/v1', v1Router);

export default rootRouter