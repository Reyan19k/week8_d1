const Lead = require("./leadTable")
const sequelize  = require("../db/connection");

exports.createLead = async (leadObject) => {
    try {
        await Lead.sync()
        await Lead.create(leadObject)
    } catch (error) {
        console.log(error)
    }
}
exports.listAllLeads = async () => {
    try {
        const leadList = await Lead.findAll()
        // console.log(leadList[0].Lead.dataValues.director, leadList[0].Lead.dataValues.movieName )
        for (let index = 0; index < leadList.length; index++){
            console.log(leadList[index].dataValues.director, leadList[index].dataValues.movieName)
        }
    } catch (error) {
        console.log(error)
    }
}
exports.updateLead = async (filterObj, updateObj) => {
    try {
        await Lead.update(updateObj, {where: filterObj})
    } catch (error) {
        console.log(error)
    }
}
exports.deleteLead = async (deleteObject) => {
        try {
            await Lead.destroy({where: {director: deleteObject.director}});
        } catch (error) {
            console.log(error)
        }
}