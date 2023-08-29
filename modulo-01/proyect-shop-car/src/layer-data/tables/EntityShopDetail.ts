import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { EntityShop } from "./EntityShop";
import { EntityProduct } from "./EntityProduct";

@Entity()
export class EntityShopDetail {
    @PrimaryColumn()
    @Generated("uuid")
    id_shop_detail: string

    @ManyToOne(type => EntityShop)
    @JoinColumn({name: 'id_shop', referencedColumnName: 'id_shop'})
    @Column({nullable: false})
    id_shop: string

    @ManyToOne(type => EntityProduct)
    @JoinColumn({name: 'id_product', referencedColumnName: 'id_product'})
    @Column({nullable: false})
    id_product: string

    @Column({nullable: false, type: "int"})
    quantity: number

    @Column({nullable: false, type: "double"})
    amount: number
}