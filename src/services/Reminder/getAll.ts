import User from "../../database/entity/User";
import ReminderRepo from "../../database/repository/ReminderRepo";
import UserRepo from "../../database/repository/UserRepo";
import { NotFoundError, ServiceError } from "../../lib";


export interface GetAllRemindersRequest {
    user?: string;
    after?: string;
}

async function getAll(params: GetAllRemindersRequest) {
    const { user, after } = params;
    let date: Date;

    const reminders = await ReminderRepo.getAll();
    if (!reminders) throw new NotFoundError('Error fetching reminders');

    if (after && user) {        
        date = new Date(+after);

        const userAccount = await UserRepo.getById(user);
        if (!userAccount) throw new NotFoundError('Error fetching user');

        const reminderAfterDate = await ReminderRepo.getUserAndAfter(date, userAccount.id);
        if (!reminderAfterDate) throw new ServiceError('Error fetching reminders');

        return reminderAfterDate;
    }

    if (user) {
       const userAccount = await UserRepo.getById(user);
        if (!userAccount) throw new NotFoundError('Error fetching user');
        
        const reminders = await ReminderRepo.getByUser(userAccount.id);
        return {
            reminders
        }
    }
    if (after) {
        date = new Date(+after);

        const reminderAfterDate = await ReminderRepo.getAfter(date);
        if (!reminderAfterDate) throw new ServiceError('Error fetching reminders');

        return reminderAfterDate;
    }

    return {
        reminders
    };
}

export default getAll;