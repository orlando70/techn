import {MoreThan } from 'typeorm'
import { getRepositoryWithQueryRunner } from '.'
import Reminder from '../entity/Reminder'


export default class ReminderRepo {
  private static getRepository = () => {
    return getRepositoryWithQueryRunner(Reminder);
  };

  public static getAll = async () => {
    return (await ReminderRepo.getRepository()).find()
  }

  public static create = async (reminder: Partial<Reminder>, ) => {
    return (await ReminderRepo.getRepository()).save(reminder)
  }

  public static getById = async (id: string, ) => {
    return (await ReminderRepo.getRepository()).findOne({
      where: { id }
    })
  }

  public static getAfter = async (after: Date, ) => {
    return  (await ReminderRepo.getRepository()).find({
      where: { createdAt: MoreThan(after) }
    })
  }

  public static getByUser = async (id: string ) => {
    return (await ReminderRepo.getRepository())
    .createQueryBuilder('reminder')
    .leftJoinAndSelect('reminder.user', 'user')
    .where('user.id = :id', {id})
    .getMany()
  }

  public static getUserAndAfter = async (after: Date, id: string ) => {
    return (await ReminderRepo.getRepository())
    .createQueryBuilder('reminder')
    .leftJoinAndSelect('reminder.user', 'user')
    .where('user.id = :id', {id})
    .andWhere('reminder.createdAt >= :after', {after})
    .getMany()
  }

  public static updateById = async (id: string, updates: Partial<Reminder>, ) => {
    await (await ReminderRepo.getRepository()).update(id, updates)
    return ReminderRepo.getById(id)
  }

  public static deleteById = async (bankId: string, ) => {
    return (await ReminderRepo.getRepository()).delete(bankId);
  };
}
