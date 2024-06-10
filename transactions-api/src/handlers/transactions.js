const uuid = require('crypto').randomUUID
const { transactions } = require('../services')
const { logger } = require('../libs')

const validType = {
    CREDIT: 'credit',
    DEBIT: 'debit',
}

const validateTransactionCreation = (amount, type) => {
    if (!(typeof(amount) === 'number')) {
        logger.error("Amount must be a number")
        return  { isvalid: false, msg: "Amount must be a number" }
    }

    if (!(typeof(type) === 'string') || !validType[type]) {
        logger.error("type must be a CREDIT or DEBIT")
        return  { isvalid: false, msg: "Amount must be CREDIT or DEBIT" }
    }

    return { isValid: true }
}

const roundAmount = amount => Math.ceil(amount * 100) / 100

module.exports = {
    create: async (req, res) => {
        const { amount, type } = req.body
        try {
            const { isValid, msg } = validateTransactionCreation(amount, type)
            if (isValid === true) {
                const id = uuid()
                await transactions.create({id, amount: roundAmount(amount), type})
                return res.send({ info: `mensagem ${id} enviada com sucesso`}).status(201)
            }
            return res.send({ error: msg }).status(400)
        }
        catch (e) {
            return res.send(e.message).status(500)
        }

    },
    get: async (req, res) => {
        const fetchedTransactions = await transactions.get()
        return res.send({ transactions: fetchedTransactions }).status(200)
    }
}