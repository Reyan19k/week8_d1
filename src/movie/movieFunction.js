const Movie = require("./movieTable")

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}
exports.readMovies = async (filterObj) => {
    try {
        if (filterObj) {
            return await Movie.findOne({ where: filterObj })
        } else {
            return await Movie.findAll()
        }
    } catch (error) {
        console.log(error)
    }
}
exports.updateMovie = async (filterObj, updateObj) => {
    try {
        await Movie.update(updateObj, {where: filterObj})
    } catch (error) {
        console.log(error)
    }
}
exports.deleteMovie = async (deleteObject) => {
        try {
            await Movie.destroy({where: {title: deleteObject.title}});
        } catch (error) {
            console.log(error)
        }
}