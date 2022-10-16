import {Router} from 'express';
import ReminderController from '../controller/Reminder';

const router = Router();


router.post('/reminders', ReminderController.Create);
router.get('/reminders', ReminderController.GetAll);
router.get('/reminders/:id', ReminderController.Get);
router.all('/reminders/:id', ReminderController.notAllowed)

export default router;