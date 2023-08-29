import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class EntityShoper {
    @PrimaryColumn()
    @Generated("uuid")
    id_shoper: string

    @Column({nullable: false})
    name: string

    @Column({nullable: false})
    gender: string

    @Column({nullable: false})
    email: string
}