import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'


@Entity()
export default class Generic {
    @PrimaryGeneratedColumn()
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
