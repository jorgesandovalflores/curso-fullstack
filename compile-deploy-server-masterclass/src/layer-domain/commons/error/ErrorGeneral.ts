import { ErrorBase } from './ErrorBase';

export default class ErrorGeneral {

    public static unAuthorized(): ErrorBase {
        return {
            http_code: 401,
            code: 401,
            message_user: "No tienes permiso a esta funcionalidad",
            message_dev: "No tienes permiso a esta funcionalidad"
        }
    }

    public static generic(detail: string): ErrorBase {
        return {
            http_code: 422,
            code: 1000,
            message_user: "Ups, tuvimos un problema, contáctate con el administrador.",
            message_dev: detail
        }
    }

    public static parameterRequired(parameter: string): ErrorBase {
        return {
            http_code: 422,
            code: 1001,
            message_user: "Ups, tuvimos un problema, contáctate con el administrador.",
            message_dev: `Los parametros [${parameter}] no se está enviando en el request.`
        }
    }

    public static notFormatEmail(email: string): ErrorBase {
        return {
            http_code: 422,
            code: 1002,
            message_user: "Ingresa un email válido.",
            message_dev: `El parametro ${email} no tiene formato.`
        }
    }

    public static sizeParamterIncorrect(parameter: string): ErrorBase {
        return {
            http_code: 422,
            code: 1003,
            message_user: `El campo ${parameter} no tiene la longitud correcta.`,
            message_dev: `El parametro ${parameter} no tiene la longitud correcta.`
        }
    }

    public static notExists(module: string): ErrorBase {
        return {
            http_code: 422,
            code: 1004,
            message_user: `${module} no existe.`,
            message_dev: `${module} no existe.`
        }
    }

    public static inactive(module: string): ErrorBase {
        return {
            http_code: 422,
            code: 1005,
            message_user: `${module} inactiv(@).`,
            message_dev: `${module} inactiv(@).`
        }
    }

    public static exists(module: string): ErrorBase {
        return {
            http_code: 422,
            code: 1006,
            message_user: `${module} ya existe`,
            message_dev: `${module} ya existe`
        }
    }

    public static valueNotValid(attribute: string, valuesValid: string): ErrorBase {
        return {
            http_code: 422,
            code: 1007,
            message_user: `El valor ingresado en ${attribute} no es válido`,
            message_dev: `Value ${attribute} not valid, values valid: [${valuesValid}]`
        }
    }

    public static valuesChange(attributes: string): ErrorBase {
        return {
            http_code: 422,
            code: 1008,
            message_user: `El valor de los atributos [${attributes}], no se permite cambiar`,
            message_dev: `El valor de los atributos [${attributes}], no se permite cambiar`
        }
    }

    public static parameterInvalid(parameter: string): ErrorBase {
        return {
            http_code: 422,
            code: 1009,
            message_user: "Ups, tuvimos un problema, contáctate con el administrador.",
            message_dev: `El parametro ${parameter} es inválido.`
        }
    }

}
