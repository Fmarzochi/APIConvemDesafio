const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb')
const dynamoDbClient = new DynamoDBClient()

module.exports = {
    handler: async event => {
        for (const record of event.Records) {
            const { body } = record
            const message = JSON.parse(body)
            console.log(`Event ${message.id} received`)

            const params = {
                TableName: 'transactions',
                Item: {
                    id: { S: message.id },
                    data: { S: body },
                }
            }

            try {
                const command = new PutItemCommand(params)
                await dynamoDbClient.send(command)
                console.log(`Event ${message.id} saved in table ${params.TableName}`)
            } catch (error) {
                console.error(`Error saving message with ID ${message.id} to DynamoDB`, error)
            }
        }
    }
}
