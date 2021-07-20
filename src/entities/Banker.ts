import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn
  } from "typeorm";
import { Person } from "./utils/Person";
  
  @Entity("banker")
  export class Banker extends Person {

    @Column({
      unique:true,
      length: 10
    })
    employee_number: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  

  }
  