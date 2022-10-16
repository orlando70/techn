import { scriptLogger } from '../lib/logger';
import createConnection from '../database/connection';
import UserRepo from '../database/repository/UserRepo';
import user from './seeds/user';
import { IUser } from '../services/User/create';


export const seedUsers = async () => {
  const getAllUsers = await UserRepo.getAll();
  if (getAllUsers.length > 1) return;

  await UserRepo.deleteAll();

  await Promise.all(user.map((user: IUser) => UserRepo.create(user)));

  scriptLogger.info('Done seeding user data');
};


const run = async () => {
  if (require.main === module) {
    try {
      await createConnection();
      await seedUsers();
    } catch (e) {
      scriptLogger.error(e);
    } finally {
      process.exit(0);
    }
  }
};

export default run();
