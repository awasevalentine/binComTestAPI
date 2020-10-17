import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "party"})
export class Party {
  @PrimaryGeneratedColumn({name: "id"})
  Id: number;

  @Column({name:"partyid"})
  PartyId: string;

  @Column({name: "partyname"})
  PartyName: string;
}