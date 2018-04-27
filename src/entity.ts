import { Entity, Column, ObjectIdColumn, ObjectID, Index } from "typeorm";
import { IsString, IsNotEmpty } from "class-validator";

@Entity()
export class PackageSettings {
  @ObjectIdColumn() id: ObjectID;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Index({ unique: true })
  name: string;

  @Column("simple-json") value: object;
}
