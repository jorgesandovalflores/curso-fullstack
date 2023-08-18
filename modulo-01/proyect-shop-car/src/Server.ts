import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { instanceDatabase } from "./Database";
import UtilLog from "./UtilLog";
import UnProtectedRoutes from "./layer-presentation/UnProtectedRoutes"
//import ProtectedRoutes from "./layer-presentation/ProtectedRoutes"

const app = new Koa();

const main = async() => {
    UtilLog.logInfo(`############## START APPLICATION ---------->`)
    try {
        // Init databases
        await instanceDatabase.initialize()
        UtilLog.logSuccess(`# database [last - reader] = successfully`)

        // Enable cors with default options
        app.use(cors())

        // Logger middleware
        app.use(UtilLog.logMiddleware())

        // Enable bodyParser with default options
        app.use(bodyParser())

        // unprotected routes
        app
        .use(UnProtectedRoutes.routes())
        .use(UnProtectedRoutes.allowedMethods())

        app.listen(3000)
        UtilLog.logSuccess(`# application start port = 3000`)
    } catch (exception) {
        UtilLog.logInfo(`# error main detail = ${exception}`)
        UtilLog.logError(`# error main = ${exception.message}`)
    }
}

main()
