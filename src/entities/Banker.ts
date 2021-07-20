import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity("banker")
  export class Banker extends BaseEntity {
      @PrimaryColumn()
      id:number
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column({
      unique: true,
    })
    email: string;
    @Column({
      unique: true,
      length: 10,
    })
    card_number: string;

    @Column({
      unique:true,
      length: 10
    })
    employee_number: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  

  }
  