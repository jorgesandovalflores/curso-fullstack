import { Entity, Column, PrimaryColumn, Generated, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class EntityUser { 
    @PrimaryColumn()
    @Generated("uuid")
    id_user: string

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    lastname: string

    @Column({nullable: true})
    url_photo: string

    @Column({nullable: true})
    gender: string
}