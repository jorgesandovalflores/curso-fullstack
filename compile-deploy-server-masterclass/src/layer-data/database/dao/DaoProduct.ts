import { EntityProduct } from "../tables/EntityProduct"
import { instanceModulesReader, instanceModulesWriter } from "../../../Database"
import UtilDate from "../../../UtilDate"
import { Like } from "typeorm"

export default class DaoProduct {
    
    public static async save(entity: EntityProduct): Promise<EntityProduct> {
        let result = await instanceModulesWriter.manager
        .getRepository(EntityProduct)
        .save(entity)
        return result
    }

    public static async findById(id_product: string): Promise<EntityProduct> {
        return await instanceModulesReader.manager.getRepository(EntityProduct).findOne({
            where: {
                id_product: id_product,
                state: true
            }
        })
    }

    public static async delete(id_product: string){
        await instanceModulesWriter.manager
        .getRepository(EntityProduct)
        .update(
            { id_product },
            {
                state: false,
                date_update: UtilDate.datetimeFormat()
            }
        )
    }

    public static async findPagination(search_text: string, page: number, pagination_size: number): Promise<EntityProduct[]> { 
        return await instanceModulesReader.manager.getRepository(EntityProduct).find({
            where: [
                {
                    name: Like(`%${search_text}%`)
                }
            ],
            order: {
                date_update: "DESC"
            },
            skip: ((page - 1) * pagination_size),
            take: pagination_size
        })
    }

    public static async findPaginationCount(search_text: string): Promise<number> { 
        return await instanceModulesReader.manager.getRepository(EntityProduct).count({
            where: [
                {
                    name: Like(`%${search_text}%`)
                }
            ]
        })
    }

}