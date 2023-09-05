export class ModelUser {
    id_user: string
    email: string
    password: string
    name: string
    lastname: string
    active: boolean

    constructor (id_user: string, email: string, password: string, name: string, lastname: string, active: boolean) {
        this.id_user = id_user
        this.email = email
        this.password = password
        this.name = name
        this.lastname = lastname
        this.active = active
    }

}