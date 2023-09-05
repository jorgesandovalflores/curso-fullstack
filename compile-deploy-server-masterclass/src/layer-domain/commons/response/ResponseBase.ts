import { ErrorBase } from '../error/ErrorBase';

export class ResponseBase<T> {
      error: ErrorBase = null
      data: T = null

      constructor(error: ErrorBase, data: T) {
            this.error = error
            this.data = data
      }
}