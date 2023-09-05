import { Context } from "koa";
import { body, request, responses, responsesAll, summary, tagsAll } from "koa-swagger-decorator";
import UtilLog from "../../UtilLog";
import { LoginUserUseCase } from "../../layer-domain/user/LoginUserUseCase";

@responsesAll({
    200: { description: "success" },
    400: { description: "bad request" },
    401: { description: "unauthorized, missing/wrong jwt token" },
    422: { description: "error logic bussines" }
})
@tagsAll(["User"])
export default class ApiV1User {

    @request("post", "/v1/user/login")
    @summary("login")
    @body({
        email: {type: "string", example: "jorge@quebuu.com", require: false},
        password: {type: "string", example: "123456", require: false}
    })
    public static async login(ctx: Context): Promise<void> {
        try {
            let useCase = new LoginUserUseCase()
                            .bind(ctx)
            let response = await useCase.execute()
            if (response.error != null) {
                ctx.status = response.error.http_code
                ctx.body = response.error
            } else {
                ctx.body = response.data
                ctx.status = 200
            }
        } catch (exception) {
            UtilLog.logError(exception, ctx)
            ctx.status = 500
        }
    }

}