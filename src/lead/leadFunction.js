const Lead = require("./leadTable")

exports.createLead = async (leadObject) => {
    try {
        await Lead.create(leadObject)
    } catch (error) {
        console.log(error)
    }
}
exports.readLead = async (filterObj) => {
    try {
        if (filterObj) {
            return await Lead.findOne({ where: filterObj })
        } else {
            return await Lead.findAll()
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