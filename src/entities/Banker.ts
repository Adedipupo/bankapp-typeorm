import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryColumn,
    Transaction,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("client")
  export class Client extends BaseEntity {
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
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  

  }
  