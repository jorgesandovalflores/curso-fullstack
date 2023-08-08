import Koa from "koa";
const app = new Koa();

const main = async() => {
    app.listen(4000)
    console.log('# application start port = 4000')
}

main()