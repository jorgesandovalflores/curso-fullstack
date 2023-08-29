import { DataSource } from "typeorm";

const debugTs: boolean = false
const isLogDb: boolean = true

const instanceDatabase = new DataSource({
    name: 'project_shop_car',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'Development',
    password: '!Development123.',
    database: 'project_shop_car',
    entities: [
        debugTs ? 'src/layer-data/tables/*.ts' : 'dist/layer-data/tables/*.js'
    ],
    timezone: 'Z',
    synchronize: true,
    logging: isLogDb,
    extra: {
        connectionLimit: 2048
    }
})

export {
    instanceDatabase
}