const { SQS, Dynamo } = require('../libs')

const queue = 'https://sqs.us-east-1.amazonaws.com/654654537238/transaction-create-queue'

module.exports = {
    create: async (transaction) => {
        const sqs = new SQS()
        await sqs.send({ queue, message: transaction })
    },
    get: async () => {
        const dynamo = new Dynamo()
        const itens = await dynamo.get()
        return itens
    }
}