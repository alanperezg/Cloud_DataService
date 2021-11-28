const serviceActions = require('../utils/serviceActions')

const getServicesCatalogue = async (req, res) => {
    await serviceActions.getServicesCatalogue().then((services) => {
        if (!services) return res.status(500).send()
        return res.status(200).send({services})
    })
}

module.exports = { getServicesCatalogue }