import ReminderRepo from "../../database/repository/ReminderRepo";
import UserRepo from "../../database/repository/UserRepo";
import { NotFoundError } from "../../lib";


export interface IOneReminder {
    id: string;
}

async function Get (params: IOneReminder) {
    const {id} = params;

    const reminder = await ReminderRepo.getById(id);

    if (!reminder) throw new NotFoundError('ID not found');

    return reminder;
}

export default Get;