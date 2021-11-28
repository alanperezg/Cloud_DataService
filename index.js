const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')

const ClientAccountController = require('./controllers/ClientAccountController')
const ProviderAccountController = require('./controllers/ProviderAccountController')
const ServiceController = require('./controllers/ServiceController')

dotenv.config()
const app = express();
app.use(cors());
app.use(bodyParser.json())

//Client Endpoints
app.post('/client/token', ClientAccountController.getTokenByAuth);

//Provider Endpoints
app.post('/provider/token', ProviderAccountController.getTokenByAuth);

//Services Enpoints
app.get('/services', ServiceController.getServicesCatalogue)

app.listen(3000, () => console.log("App listening on 3000"));