import { Context } from "koa";
import { body, path, request, responses, responsesAll, summary, tagsAll } from "koa-swagger-decorator";
import UtilLog from "../../UtilLog";
import ProductUseCase from "../../layer-domain/ProductUseCase";

@responsesAll({
    200: { description: "success" },
    400: { description: "bad request" },
    401: { description: "unauthorized, missing/wrong jwt token" },
    422: { description: "error logic bussines" },
    500: { description: "error generic" }
})
@tagsAll(["Products"])
export default class ApiV1products {

    @request("get", "/v1/products")
    @summary("get all products")
    public static async getAllProducts(ctx: Context): Promise<void> {
        try {
            let response = await ProductUseCase.getAll(ctx)
            ctx.body = response
            ctx.status = 200
        } catch (exception) {
            UtilLog.logError(exception, ctx)
            ctx.status = 500
        }
    } 

}