const yargs = require('yargs')
const { sequelize } = require("./db/connection");
const { createMovie, readMovies, deleteMovie, updateMovie } = require('./movie/movieFunction')

const app = async (yargsObject) => {
    try {
        await sequelize.sync()

        if (yargsObject.create) {
            await createMovie({ title: yargsObject.title, actor: yargsObject.actor })
            // console.log(await readMovies())
            let output = {}
            let table = await readMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if (yargsObject.read) {
            let output = {}
            let table = await readMovies({ [yargsObject.key] : yargsObject.value })
                output.id = table.id
                output.title = table.title
                output.actor = table.actor
                console.log(output)
        } else if (yargsObject.readAll) {
            let output = {}
            let table = await readMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if (yargsObject.delete) {
            await deleteMovie({ 
                title: yargsObject.title,
                actor: yargsObject.actor 
            })
            let output = {}
            let table = await readMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if (yargsObject.update) {
            await updateMovie(
                { [yargsObject.key]: yargsObject.value },
                { [yargsObject.updateKey]: yargsObject.updateValue }
            );
            let output = {}
            let table = await readMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if (yargsObject.lead) {

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