const { DataTypes } = require('sequelize')
const { sequelize } = require("../db/connection");

const Lead = sequelize.define("Lead", {
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified"
    },
    movieName: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified",
        unique: true,
        allowNull: false
    }
})

module.exports = Lead