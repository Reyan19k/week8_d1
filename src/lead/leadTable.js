const { DataTypes } = require('sequelize')
const { sequelize } = require("../db/connection");

const Lead = sequelize.define("Lead", {
    director: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    movieId: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified"
    }
})

module.exports = Lead