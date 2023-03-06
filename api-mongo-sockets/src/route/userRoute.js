import { Router } from 'express';
import { getUser } from '../controller/userController.js';


const routes = Router();
//add routes
routes.get('/', getUser);

export default routes;