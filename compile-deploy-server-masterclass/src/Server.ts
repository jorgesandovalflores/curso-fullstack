import { EnumEnvironment } from "./layer-domain/commons/model/EnumEnvironment"
import dotenv from "dotenv"
dotenv.config({path: ".env"})
if (String(process.env.ENVIRONMENT) === EnumEnvironment.DEVELOPMENT) {
    dotenv.config({path: ".env.development"})
} else {
    dotenv.config({path: ".env.production"})
}

import Koa from "koa";
import jwt from "koa-jwt";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { instanceModulesReader, instanceModulesWriter } from "./Database";
import UtilLog from "./UtilLog";
import { SystemUserUseCase } from "./layer-domain/user/SystemUserUseCase"
import UnProtectedRoutes from "./layer-presentation/UnProtectedRoutes"
import ProtectedRoutes from "./layer-presentation/ProtectedRoutes"

const app = new Koa();

const main = async() => {
    UtilLog.logInfo(`############## START APPLICATION API BACKOFFICE ---------->`)
    try {
        // Init databases
        await instanceModulesReader.initialize()
        UtilLog.logSuccess(`# database [modules - reader] = successfully`)

        await instanceModulesWriter.initialize()
        UtilLog.logSuccess(`# database [modules - writer] = successfully`)

        // Init usecase for system
        let systemUserBackoffice = new SystemUserUseCase()
        await systemUserBackoffice.execute()

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

        // JWT middleware -> below this line routes are only reached if JWT token is valid, secret as env variable
        // do not protect swagger-json and swagger-html endpoints
        app
        .use(jwt({secret: String(process.env.APPLICATION_JWT_SECRET)})
        .unless({path: [/^\/swagger-/]}))

        // protected routes
        app
        .use(ProtectedRoutes.routes())
        .use(ProtectedRoutes.allowedMethods())

        app.listen(process.env.APPLICATION_PORT)
        UtilLog.logSuccess(`# application start port = ${process.env.APPLICATION_PORT}`)
    } catch (exception) {
        UtilLog.logInfo(`# error main detail = ${exception}`)
        UtilLog.logError(`# error main = ${exception.message}`)
    }
}

main()
