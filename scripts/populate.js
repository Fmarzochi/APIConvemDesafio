const axios = require('axios')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function generatePayload() {
    return {
        amount: getRandomInt(20, 1000),
        type: Math.random() < 0.5 ? 'CREDIT' : 'DEBIT'
    }
}

async function sendRequest() {
    const payload = generatePayload()
    try {
        const response = await axios.post('http://localhost:5001/api/transactions', payload)
        console.log('Requisição bem-sucedida:', response.data)
    } catch (error) {
        console.error('Erro ao enviar requisição:', error.message)
    }
}

async function sendRequests() {
    const promises = []
    for (let i = 0; i < 100; i++) {
        promises.push(sendRequest())
    }
    await Promise.all(promises)
}

sendRequests()