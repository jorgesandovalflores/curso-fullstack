import { DataSource } from "typeorm";

const debugTs: boolean = (String(process.env.APPLICATION_DEPLOY_TS) == 'true')
const isLogDb: boolean = (String(process.env.APPLICATION_IS_LOG_DB) == 'true')

const instanceModulesReader = new DataSource({
    name: 'modules-reader',
    type: 'mysql',
    host: String(process.env.MYSQL_MODULES_READER_HOST),
    port: Number(process.env.MYSQL_MODULES_READER_PORT),
    username: String(process.env.MYSQL_MODULES_READER_USERNAME),
    password: String(process.env.MYSQL_MODULES_READER_PASSWORD),
    database: String(process.env.MYSQL_MODULES_READER_DATABASE),
    entities: [
        debugTs ? 'src/layer-data/database/tables/*.ts' : 'dist/layer-data/database/tables/*.js'
    ],
    timezone: 'Z',
    synchronize: true,
    logging: isLogDb,
    extra: {
        connectionLimit: 2048
    }
})

const instanceModulesWriter = new DataSource({
    name: 'modules-writer',
    type: 'mysql',
    host: String(process.env.MYSQL_MODULES_WRITER_HOST),
    port: Number(process.env.MYSQL_MODULES_WRITER_PORT),
    username: String(process.env.MYSQL_MODULES_WRITER_USERNAME),
    password: String(process.env.MYSQL_MODULES_WRITER_PASSWORD),
    database: String(process.env.MYSQL_MODULES_WRITER_DATABASE),
    entities: [
        debugTs ? 'src/layer-data/database/tables/*.ts' : 'dist/layer-data/database/tables/*.js'
    ],
    timezone: 'Z',
    synchronize: true,
    logging: isLogDb,
    extra: {
        connectionLimit: 2048
    }
})

export {
    instanceModulesReader,
    instanceModulesWriter
}