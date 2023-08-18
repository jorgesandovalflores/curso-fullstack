import { Context } from "koa";
import UtilDate from "./UtilDate";
import colors from 'colors'
import { uuid } from 'uuidv4'
colors.enable()

export default class UtilLog {

    public static logError(message: string, ctx: Context = null) {
        if (ctx != null) {
            let requestId: string = ctx.get('X-Request-Id')
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.ERROR}]: [${requestId}] ${message}`.red
            )
        } else {
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.ERROR}]: ${message}`.red
            )
        }
    }

    public static logSuccess(message: string, ctx: Context = null) {
        if (ctx != null) { 
            let requestId: string = ctx.get('X-Request-Id')
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.SUCCESS}]: [${requestId}] ${message}`.green
            )
        } else {
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.SUCCESS}]: ${message}`.green
            )
        }
    }

    public static logInfo(message: string, ctx: Context = null) {
        if (ctx != null) { 
            let requestId: string = ctx.get('X-Request-Id')
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.INFO}]: [${requestId}] ${message}`.white
            )
        } else {
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.INFO}]: ${message}`.white
            )
        }
    }

    public static logWarn(message: string, ctx: Context = null) {
        if (ctx != null) { 
            let requestId: string = ctx.get('X-Request-Id')
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.WARNING}]: [${requestId}] ${message}`.yellow
            )
        } else {
            console.log(
                `${UtilDate.datetimeFormat()} [${LogLevel.WARNING}]: ${message}`.yellow
            )
        }
    }

    public static logMiddleware(): any {
        return async (ctx: Context, next: () => Promise<any>): Promise<void> => {
            let uuid_ = uuid()
            let headerRequestId: string = ctx.get('X-Request-Id')
            let requestId = headerRequestId
            if (requestId == '') {
                ctx.set('X-Request-Id', uuid_)
                requestId = uuid_
            }

            const start = new Date().getTime();
            await next();
            const ms = new Date().getTime() - start;
            const message = `${ctx.method} ${ctx.originalUrl} ${ctx.status} ${ms}ms`;
            
            if (ctx.status >= 500) {
                UtilLog.logError(`[${requestId}] # ${message}`)
                if (ctx.method != 'GET') {
                    UtilLog.logError(`[${requestId}] # request = ${JSON.stringify(ctx.request.body)}`)
                }
                UtilLog.logError(`[${requestId}] # response = ${JSON.stringify(ctx.response.body)}`)
            } else if (ctx.status >= 400) {
                UtilLog.logWarn(`[${requestId}] # ${message}`)
                if (ctx.method != 'GET') {
                    UtilLog.logWarn(`[${requestId}] # request = ${JSON.stringify(ctx.request.body)}`)
                }
                UtilLog.logWarn(`[${requestId}] # response = ${JSON.stringify(ctx.response.body)}`)
            } else {
                UtilLog.logInfo(`[${requestId}] # ${message}`)
                if (ctx.method != 'GET') {
                    UtilLog.logInfo(`[${requestId}] # request = ${JSON.stringify(ctx.request.body)}`)
                }
                UtilLog.logInfo(`[${requestId}] # response = ${JSON.stringify(ctx.response.body)}`)
            }
        };
    }
}

enum LogLevel {
    INFO        = "INFO___",
    ERROR       = "ERROR__",
    WARNING     = "WARNING",
    SUCCESS     = "SUCCESS"
}