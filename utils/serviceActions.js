const DBConnection = require('./DBConnection')
const { logError } = require('./logger')

const getServicesCatalogue = async () => {
    const DB = new DBConnection();
    try{
        const data = await DB.query('SELECT id, name, description, price, icon FROM Service')
        DB.close();
        return data
    }catch(e){
        logError(e)
        return null
    }
}

module.exports = { getServicesCatalogue }