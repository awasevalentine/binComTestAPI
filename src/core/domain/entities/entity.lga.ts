import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"lga"})
export class LGA {
  @PrimaryGeneratedColumn()
  uniqueid: number;

  @Column({name:"lga_id"})
  LgaId: number;

  @Column({name: "lga_name"})
  Name: string;

  @Column({name: "state_id"})
  StateId: number;


  @Column({name:"lga_description"})
  Description: string;

}