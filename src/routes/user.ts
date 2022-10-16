import {Router} from 'express';
import UserController from '../controller/User';

const router = Router();

router.post('/user', UserController.Create);


export default router;