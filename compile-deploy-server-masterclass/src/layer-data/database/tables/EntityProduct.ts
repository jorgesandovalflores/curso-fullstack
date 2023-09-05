import {Entity, Column, PrimaryColumn, Generated, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import {IsDateString} from "class-validator";

@Entity()
export class EntityProduct {
    @PrimaryColumn()
    @Generated("uuid")
    id_product: string

    @Column({unique: true, nullable: false})
    name: string

    @Column({nullable: false})
    color: string

    @Column({type: "double", nullable: true})
    price: string

    @Column({nullable: false})
    active: boolean

    @Column({type: "datetime", nullable: false})
    @IsDateString()
    date_create: string

    @Column({type: "datetime", nullable: false})
    @IsDateString()
    date_update: string
    
    @Column({nullable: false})
    state: boolean
}