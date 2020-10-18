import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "polling_unit"})
export class PollingUnit {
  @PrimaryGeneratedColumn()
  uniqueid: number;

  @Column({name:"polling_unit_id"})
  UnitId: number;

  @Column({name:"ward_id"})
  WardId: number;

  @Column({name: "uniquewardid"})
  UniqueWardId: number;

  @Column({name: "lga_id"})
  LgaId: number;


  @Column({name:"polling_unit_number"})
  PUnitNumber: string;

  @Column({name:"polling_unit_name"})
  PUnitName: string;

  @Column({name:"polling_unit_description"})
  Description: string;

  @Column({name:"entered_by_user"})
  EnteredBy: string;

  @Column({name:"date_entered", type:"datetime"})
  CreatedDate: Date;

  @Column({name: "user_ip_address"})
  UserIpAddress: string;


}
