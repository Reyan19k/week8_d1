const yargs = require('yargs')
const { sequelize } = require("./db/connection");

const app = async (yargsObject) => {
    try {
        await sequelize.sync()

        if (yargsObject.create) {

        } else if (yargsObject.read) {

        } else {
            console.log("Incorrect Command")
        }

        await sequelize.close()
    } catch (error) {
        console.log(error)
        await sequelize.close()
    }
}


app(yargs.argv)