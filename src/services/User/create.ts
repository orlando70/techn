import UserRepo from "../../database/repository/UserRepo";
import { ServiceError } from "../../lib";

export interface IUser {
    firstName: string;
    lastName: string;
}

async function Create (params: IUser) {
    const user = await UserRepo.create(params);

    if (!user) throw new ServiceError('Error creating User');

    return user;
}

export default Create;