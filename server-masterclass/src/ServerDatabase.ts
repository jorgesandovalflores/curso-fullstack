import { instanceDatabase } from "./Database";

const main = async() => {
    await instanceDatabase.initialize()
}

main()