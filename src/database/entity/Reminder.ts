import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Generic from './Generic';
import User from './User';

@Entity()
export default class Reminder extends Generic {
  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  user!: User;

  @Column()
  title!: string;

  @Column()
  description!: string;
}
