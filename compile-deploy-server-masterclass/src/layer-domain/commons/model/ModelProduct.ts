export class ModelProduct {
    id_product: string
    name: string
    color: string
    price: string
    active: boolean

    constructor (id_product: string, name: string, color: string, price: string, active: boolean) {
        this.id_product = id_product
        this.name = name
        this.color = color
        this.price = price
        this.active = active
    }
}