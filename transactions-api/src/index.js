const express = require('express')
const bodyParser = require('body-parser')
const routers = require('./routers')
const { logger } = require('./libs')
var cors = require('cors')
require("dotenv").config()

const app = express()
app.use(bodyParser.json())
app.use(cors(), routers.transactions)
const PORT = process.env.PORT

app.listen(PORT, () => {
	logger.info(`Servidor rodando na porta ${PORT}`)
})