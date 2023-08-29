export class ModelProduct {
    id_product: string
    name: string
    color: string
    description: string
    date_created: string
    amount: number

    constructor (id_product: string, name: string, color: string, description: string, date_created: string, amount: number) {
        this.id_product = id_product
        this.name = name
        this.color = color
        this.description = description
        this.date_created = date_created
        this.amount = amount
    }
}