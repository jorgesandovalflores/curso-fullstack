import UtilDate from "../../../UtilDate";
import { EntityProduct } from "../../../layer-data/database/tables/EntityProduct";
import { ModelProduct } from "../model/ModelProduct";

export default class MapperProduct {

    public static toNewEntity(model: ModelProduct): EntityProduct {
        let entity = new EntityProduct()
        entity.name = model.name
        entity.color = model.color
        entity.price = model.price
        entity.active = true
        entity.date_create = UtilDate.datetimeFormat()
        entity.date_update = UtilDate.datetimeFormat()
        entity.state = true

        return entity
    }

    public static toUpdateEntity(model: ModelProduct, entity: EntityProduct): EntityProduct {
        entity.name = model.name
        entity.color = model.color
        entity.price = model.price
        entity.active = model.active
        entity.date_update = UtilDate.datetimeFormat()

        return entity
    }

    public static toModel(entity: EntityProduct): ModelProduct {
        return new ModelProduct(
            entity.id_product,
            entity.name,
            entity.color,
            entity.price,
            entity.active
        )
    }
}