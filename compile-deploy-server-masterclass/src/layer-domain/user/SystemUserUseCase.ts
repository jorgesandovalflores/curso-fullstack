import { BaseUseCase } from "../commons/BaseUseCase";
import { ResponseBase } from "../commons/response/ResponseBase";
import jsonUser from "../../layer-data/files/jsonUser.json"
import DaoUser from "../../layer-data/database/dao/DaoUser";
import { ModelUser } from "../commons/model/ModelUser";
import MapperUser from "../commons/mapper/MapperUser";
import crypto from 'crypto-js';

export class SystemUserUseCase extends BaseUseCase<boolean> {
    
    async execute(): Promise<ResponseBase<boolean>> {
        let request: ModelUser = jsonUser
        let entity = await DaoUser.findByEmailAndPassword(request.email, crypto.MD5(request.password).toString())
        if (entity == null || entity == undefined) {
            await DaoUser.save(MapperUser.toNewEntity(request))
        }

        return this.response
    }

}