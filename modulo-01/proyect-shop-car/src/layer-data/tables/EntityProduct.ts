import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class EntityProduct {
    @PrimaryColumn()
    @Generated("uuid")
    id_product: string

    @Column({nullable: false})
    name: string

    @Column({nullable: false})
    color: string

    @Column({nullable: false})
    description: string

    @Column({nullable: false, type: "datetime"})
    date_created: string
 
    @Column({nullable: false})
    state: boolean

    @Column({nullable: false, type: "double"})
    amount: number
}