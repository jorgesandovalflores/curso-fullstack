import UtilDate from "../../../UtilDate";
import { EntityUser} from "../../../layer-data/database/tables/EntityUser";
import { ModelUser } from "../model/ModelUser";
import crypto from 'crypto-js';

export default class MapperUser {

    public static toNewEntity(model: ModelUser): EntityUser {
        let entity = new EntityUser()
        entity.email = model.email
        entity.password = crypto.MD5(model.password).toString()
        entity.name = model.name
        entity.lastname = model.lastname
        entity.active = true
        entity.date_create = UtilDate.datetimeFormat()
        entity.date_update = UtilDate.datetimeFormat()
        entity.state = true

        return entity
    }

    public static toModel(entity: ModelUser): ModelUser {
        return new ModelUser(
            entity.id_user,
            entity.email,
            entity.password,
            entity.name,
            entity.lastname,
            entity.active
        )
    }
}