import { Router } from 'express';
import { factsRules } from '../controller/ruleController.js';

const routes = Router();
//add routes
routes.post('/', factsRules);

export default routes;