import { Router } from 'express';
import UserRoutes from './userRoute.js';
import FactRules from './factRoutes.js';

const routes = Router();
//add routes
routes.use('/user', UserRoutes);
routes.use('/rules', FactRules);

export default routes;