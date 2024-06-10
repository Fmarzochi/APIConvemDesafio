const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb')

require('dotenv').config()

class Dynamo {
  constructor() {   
    const client = new DynamoDBClient({})
    const docClient = DynamoDBDocumentClient.from(client)
    this.client = docClient
  }

  async get(tableName = 'transactions', limit = 1000) {
    const params = {
      TableName: tableName,
      Limit: limit,
    }
    const command = new ScanCommand(params)
    const { Items } = await this.client.send(command)
    const itens = Items.map(item => JSON.parse(item.data))

    return itens
  }
}

module.exports = Dynamo


