import express, { Router } from 'express';

// import health from './health';
import api from './api';

const rootRouter: Router = express.Router();

rootRouter.use('/api', api);
// rootRouter.use('/status', health);

export default rootRouter