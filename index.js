const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')

const ClientAccountController = require('./controllers/ClientAccountController')
const ProviderAccountController = require('./controllers/ProviderAccountController')
const ServiceController = require('./controllers/ServiceController')

dotenv.config()
const PORT = process.env.TOKEN_KEY || 3000
const app = express();
app.use(cors());
app.use(bodyParser.json())

//Client Endpoints
app.post('/client/token', ClientAccountController.getTokenByAuth);

//Provider Endpoints
app.post('/provider/token', ProviderAccountController.getTokenByAuth);

//Services Enpoints
app.get('/services', ServiceController.getServicesCatalogue)

app.listen(PORT, () => console.log(`App listening on ${PORT}`));