import { Entity, Column, ObjectIdColumn, ObjectID, Index } from "typeorm";
import { IsString, IsNotEmpty } from "class-validator";

@Entity()
@Index(["name"])
@Index(() => ({ name: -1 }))
@Index("title_name_count", () => ({ name: 1 }))
@Index("title_name_count_reversed", () => ({ name: -1 }))
export class PackageSettings {
  @ObjectIdColumn() id: ObjectID;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Index()
  name: string;

  @Column() test: string;

  @Column("simple-json") value: object;
}
