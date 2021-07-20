import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

@Entity('transaction')
export class Transaction extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'enum',
        enum: TransactionTypes
    })
    type: string;
    @Column({
        type: "numeric"
    })
    amount: number;
}