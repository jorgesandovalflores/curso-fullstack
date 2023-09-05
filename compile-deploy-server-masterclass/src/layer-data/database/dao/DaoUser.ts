import { EntityUser } from "../tables/EntityUser"
import { instanceModulesReader, instanceModulesWriter } from "../../../Database"
import UtilDate from "../../../UtilDate"

export default class DaoUser {

    public static async save(entity: EntityUser): Promise<EntityUser> {
        let result = await instanceModulesWriter.manager
        .getRepository(EntityUser)
        .save(entity)
        return result
    }

    public static async delete(id_user: string){
        await instanceModulesWriter.manager
        .getRepository(EntityUser)
        .update(
            { id_user },
            {
                state: false,
                date_update: UtilDate.datetimeFormat()
            }
        )
    }

    public static async findById(id_user: string): Promise<EntityUser> {
        return await instanceModulesReader.manager.getRepository(EntityUser).findOne({
            where: {
                id_user: id_user,
                state: true
            }
        })
    }

    public static async findByEmailAndPassword(email: string, password: string): Promise<EntityUser> {
        return await instanceModulesReader.manager.getRepository(EntityUser).findOne({
            where: {
                email: email,
                password: password,
                state: true
            }
        })
    }

}