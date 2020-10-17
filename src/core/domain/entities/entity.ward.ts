import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "ward"})
export class Ward {
  @PrimaryGeneratedColumn()
  uniqueid: number;

  @Column({name:"ward_id"})
  WardId: number;

  @Column({name: "ward_name"})
  WardName: string;

  @Column({name: "lga_id"})
  LgaId: number;

  @Column({name:"ward_description"})
  Description: string;

}
