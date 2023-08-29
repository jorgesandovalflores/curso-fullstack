import { Context } from "koa";
import { ModelProduct } from "./model/ModelProduct";
import DaoProduct from "../layer-data/dao/DaoProduct";

export default class ProductUseCase {

    public static async getAll(context: Context): Promise<ModelProduct[]> {
        let list: ModelProduct[] = []
        
        let entities = await DaoProduct.getAll()
        for (let entity of entities) {
            list.push(new ModelProduct(
                entity.id_product,
                entity.name,
                entity.color,
                entity.description,
                entity.date_created,
                entity.amount
            ))
        }

        return list
    }

}