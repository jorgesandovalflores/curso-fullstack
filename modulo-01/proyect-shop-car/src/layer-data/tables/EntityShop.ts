import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { EntityShoper } from "./EntityShoper";

@Entity()
export class EntityShop {
    @PrimaryColumn()
    @Generated("uuid")
    id_shop: string

    @ManyToOne(type => EntityShoper)
    @JoinColumn({name: 'id_shoper', referencedColumnName: 'id_shoper'})
    @Column({nullable: false})
    id_shoper: string

    @Column({nullable: false, type: "datetime"})
    date_shop: string

    @Column({nullable: false, type: "double"})
    amount: number
}