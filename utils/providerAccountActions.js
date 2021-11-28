const DBConnection = require('./DBConnection')
const { logError } = require('./logger')

const getAccountByAuth = async ({user, password}) => {
    const DB = new DBConnection();
    try{
        const data = await DB.query('SELECT id, firstName, lastName, pp FROM ProvidertUser WHERE user = ? AND password = ?', [user, password])
        DB.close();
        return data[0]
    }catch(e){
        logError(e)
        return null
    }

}

module.exports = { getAccountByAuth }