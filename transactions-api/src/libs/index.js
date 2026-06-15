module.exports = {
    logger: require('./logger'),
    SQS: require('./aws/SQS'),
    Dynamo: require('./aws/Dynamo'),
}