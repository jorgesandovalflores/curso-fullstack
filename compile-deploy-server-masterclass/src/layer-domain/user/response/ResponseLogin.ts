import { ModelUser } from "../../../layer-domain/commons/model/ModelUser"

export class ResponseLogin {
    token: string
    user: ModelUser

    constructor (token: string, user: ModelUser) {
        this.token = token
        this.user = user
    }
}