import { Context } from "koa"
import jwt from 'jwt-simple'
import { ResponseBase } from "./response/ResponseBase"
import { ErrorBase } from "./error/ErrorBase"
import ErrorGeneral from "./error/ErrorGeneral"
import { ModelUser } from "./model/ModelUser"

export abstract class BaseUseCase<T> {
      
      public PAGINATION_SIZE: number = 10
      public response: ResponseBase<T> = new ResponseBase(null, null)
      abstract execute(): Promise<ResponseBase<T>>

      protected validateAttributes(attributes: string[], ctx: Context): ErrorBase {
            let error: ErrorBase = null
            if (attributes != null) {
                  for (let attribute of attributes) {
                        if (!(attribute in (ctx.request.body as any))) {
                              error = ErrorGeneral.parameterRequired(attribute)
                              break
                        }
                  }
            }
            return error
      }

      protected validateAttributesQuery(attributes: string[], ctx: Context): ErrorBase {
            let error: ErrorBase = null
            if (attributes != null) {
                  for (let attribute of attributes) {
                        if (!(attribute in ctx.query)) {
                              error = ErrorGeneral.parameterRequired(attribute)
                              break
                        }
                  }
            }
            return error
      }

      protected getModelUserBackoffice(ctx: Context): ModelUser {
            let headers = ctx.headers
            let authorization = headers.authorization
            let token = authorization.split(' ')[1]
            let userBackoffice: ModelUser = jwt.decode(token, process.env.APPLICATION_JWT_SECRET)
            return userBackoffice
      }

}
