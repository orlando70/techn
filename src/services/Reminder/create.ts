import ReminderRepo from "../../database/repository/ReminderRepo";
import UserRepo from "../../database/repository/UserRepo";
import { NotFoundError } from "../../lib";


export interface IReminder {
    userId: string;
    title: string;
    description: string;
}

async function Create (params: IReminder) {
    const {userId, title, description} = params;

    const user = await UserRepo.getById(userId);
    if (!user) throw new NotFoundError('User not found');

    const reminder = await ReminderRepo.create({
        user,
        title,
        description
    });

    return reminder;
}

export default Create;