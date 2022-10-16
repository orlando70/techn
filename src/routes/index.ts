import {Router} from 'express';
import reminderRoutes from './reminder';
import userRoutes from './user';

const router = Router();

router.use(reminderRoutes);
router.use(userRoutes);

export default router;