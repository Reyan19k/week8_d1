const { DataTpyes } = require('sequelize')
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTpyes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTpyes.STRING,
        defaultValue: "Not Specified"
    }
})

module.exports = Movie
