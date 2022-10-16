import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import Generic from './Generic';

@Entity()
export default class User extends Generic {   
    @Column()
    firstName!: string;
    
    @Column()
    lastName!: string;

}
