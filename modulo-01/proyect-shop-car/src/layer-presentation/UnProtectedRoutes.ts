import { SwaggerRouter } from "koa-swagger-decorator"
import ApiRouterUnprotected from "./unprotected"

const router = new SwaggerRouter()
router.use(ApiRouterUnprotected.routes())

export default router;