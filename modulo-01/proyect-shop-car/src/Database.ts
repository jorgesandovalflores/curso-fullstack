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
    database: 'curso_fulltack',
    entities: [
        debugTs ? 'src/tables/*.ts' : 'dist/tables/*.js'
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