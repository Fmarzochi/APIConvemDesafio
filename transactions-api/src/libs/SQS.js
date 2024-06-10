const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs')

class SQS {
  constructor() {
    this.client = new SQSClient()
  }

  async send({ queue, message }) {
    const params = {
      QueueUrl: queue,
      MessageBody: JSON.stringify(message)
    }
    const command = new SendMessageCommand(params)
    const result = await this.client.send(command)
    return result
  }
}

module.exports = SQS