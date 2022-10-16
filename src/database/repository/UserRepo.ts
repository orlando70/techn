import { IsNull, Not } from 'typeorm'
import { getRepositoryWithQueryRunner } from '.'
import User from '../entity/User'

export default class UserRepo {
  private static getRepository = () => {
    return getRepositoryWithQueryRunner(User);
  };

  public static getAll = async () => {
    return (await UserRepo.getRepository()).find()
  }

  public static create = async (user: Partial<User>, ) => {
    return (await UserRepo.getRepository()).save(user)
  }

  public static getById = async (id: string, ) => {
    return (await UserRepo.getRepository()).findOne({
      where: { id }
    })
  }

  public static updateById = async (id: string, updates: Partial<User>, ) => {
    await (await UserRepo.getRepository()).update(id, updates)
    return UserRepo.getById(id)
  }

  public static deleteById = async (bankId: string, ) => {
    return (await UserRepo.getRepository()).delete(bankId);
  };

  public static deleteAll = async () => {
    return (await UserRepo.getRepository()).delete({
        id: Not(IsNull()),
      });
  };
}
