export class RequestPagination {
    text: string
    page: number

    constructor(text: string, page: number) {
        this.text = text
        this.page = page
    }
}