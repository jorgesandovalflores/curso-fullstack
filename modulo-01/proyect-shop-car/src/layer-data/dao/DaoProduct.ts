import { instanceDatabase } from '../../Database'
import { EntityProduct } from "../tables/EntityProduct";

export default class DaoProduct {

    public static async save(entity: EntityProduct): Promise<EntityProduct> {
        let result = await instanceDatabase.manager
        .getRepository(EntityProduct)
        .save(entity)
        return result
    }

    public static async getAll(): Promise<EntityProduct[]> {
        return await instanceDatabase.manager.getRepository(EntityProduct).find({
            where: {
            }
        })
    }

    
    public static async update(name: string, id_product: string){
        await instanceDatabase.manager
        .getRepository(EntityProduct)
        .update(
            {
                name: name 
            }, {
                id_product: id_product
            }
        )
    }

    public static async delete(entity: EntityProduct) {
        await instanceDatabase.manager
        .getRepository(EntityProduct)
        .delete(entity)
    }

}