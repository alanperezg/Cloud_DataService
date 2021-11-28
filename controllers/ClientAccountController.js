const clientAccountActions = require ('../utils/clientAccountActions')
const jwt = require('jsonwebtoken');

const getTokenByAuth = async (req, res) => {
    const body = req.body;
    if(body.user !== undefined && body.password !== undefined){
        const clientData = await clientAccountActions.getAccountByAuth({user: body.user, password: body.password})
        if(clientData === undefined) return res.status(401).send()
        if(clientData === null) return res.status(500).send()

        let payload = {userId: clientData.id, firstName: clientData.id, lastName: clientData.lastName, pp: clientData.pp};
        jwt.sign(payload, process.env.TOKEN_KEY, {algorithm: 'HS512'}, function(err, token) {
            return res.status(200).send({token});
        });
    }else{
        return res.status(400).send()
    }
}

module.exports = { getTokenByAuth }