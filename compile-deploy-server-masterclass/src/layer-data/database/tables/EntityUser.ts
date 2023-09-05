import {Entity, Column, PrimaryColumn, Generated, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import {IsDateString} from "class-validator";

@Entity()
export class EntityUser {
    @PrimaryColumn()
    @Generated("uuid")
    id_user: string

    @Column({unique: true, nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    lastname: string

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