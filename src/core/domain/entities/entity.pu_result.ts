import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"announced_pu_results"})
export class PollingUnitResult {
  @PrimaryGeneratedColumn()
  result_id: number;

  @Column({name:"polling_unit_uniqueid"})
  PUnitId: number;

  @Column({name: "party_abbreviation"})
  Party: string;

  @Column({name: "party_score"})
  PartyScore: number;

  @Column({name:"entered_by_user"})
  EnteredBy: string;

  @Column({name:"date_entered", type:"datetime"})
  CreatedDate: Date;

  @Column({name: "user_ip_address"})
  UserIpAddress: string;

}