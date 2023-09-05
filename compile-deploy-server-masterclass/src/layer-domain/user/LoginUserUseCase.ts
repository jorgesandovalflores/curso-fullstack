import { Context } from "koa";
import { BaseUseCase } from "../commons/BaseUseCase";
import { ResponseBase } from "../commons/response/ResponseBase";
import DaoUser from "../../layer-data/database/dao/DaoUser";
import { RequestLogin } from "./request/RequestLogin";
import jwt from "jwt-simple";
import crypto from 'crypto-js';
import ErrorGeneral from "../commons/error/ErrorGeneral";
import MapperUser from "../commons/mapper/MapperUser";
import { ResponseLogin } from "./response/ResponseLogin";

export class LoginUserUseCase extends BaseUseCase<ResponseLogin> {
    
    ctx: Context
    bind(ctx: Context): LoginUserUseCase {
        this.ctx = ctx
        return this
    }

    async execute(): Promise<ResponseBase<ResponseLogin>> {
        let errorValidations = this.validateAttributes(['email', 'password'], this.ctx)
        if (errorValidations != null) {
            this.response.error = errorValidations
        } else {

            let request: RequestLogin = JSON.parse(JSON.stringify(this.ctx.request.body))
            let entity = await DaoUser.findByEmailAndPassword(request.email, crypto.MD5(request.password).toString())
            if (entity == null || entity == undefined) {
                this.response.error = ErrorGeneral.valueNotValid('credenciales', 'email|password')
            } else if(!entity.active) {
                this.response.error = ErrorGeneral.inactive('usuario')
            } else {

                let model = MapperUser.toModel(entity)
                delete model.password
                let token = jwt.encode(model, process.env.APPLICATION_JWT_SECRET)

                this.response.data = new ResponseLogin(token, model)
                
            }

        }
        return this.response
    }

}