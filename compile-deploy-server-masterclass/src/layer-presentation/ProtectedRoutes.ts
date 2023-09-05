import { SwaggerRouter } from "koa-swagger-decorator"
import ApiRouterProtected from "./protected"

const router = new SwaggerRouter()
router.use(ApiRouterProtected.routes())

export default router;