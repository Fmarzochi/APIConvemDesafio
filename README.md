#Convem-Challenge
## Dasafio da Empresa Convem

O Desafio proposto foi fazer uma API POST em NodeJS que receba um payload de uma transação (idempotencyId, 
amount, type: credit /debit).
Essa rota vai executar uma função que coloca a transação em uma AWS SQS (fila), usando o SDK da AWS.
Substitui também subir uma função AWS Lambda conectada nessa SQS que pegue cada mensagem e salve em um BD AWS DynamoDB, criei um script de teste para criar 100 transações diferentes e fazer a requisição POST em nodeJS. 
Por fim, vou criar uma tela simples usando Next.JS que exiba essas transações salvas no DynamoDB, a partir de uma rota GET.

## Servidor HTTP: Iniciando o Servidor

### Para iniciar o servidor HTTP:
 Para iniciar o servidor, navegue ate a pasta do projeto  ```cd transaction-api``` instale as dependencias:
```npm i``` e rode o servidor: ```npm run start```

### Rotas:
 O servidor HTTP possui 2 rotas: POST e GET
 A rota responde em POST http://localhost:5000/api/transactions com o seguinte payload:
 ```
{
    "amount": 3.0012908371092830,
    "type": "DEBIT"
}
```

A rota GET responde em GET http://localhost:5000/api/transactions com o seguinte payload:
```
{
    "transactions": [
        {
            "id": "2093ad7d-3f42-4205-beae-06aca934e3ec",
            "amount": 1,
            "type": "CREDIT"
        },
        {
            "id": "83fa2057-7562-4292-911c-3dc7407e5062",
            "amount": 3,
            "type": "DEBIT"
        }
    ]
}
```

## Front-end

### Para iniciar a aplicacao:
Navegue ate a pasta da aplicacao ```cd transactions-app``` e instale as dependecias com ```npm i``` e inicie a aplicacao com ```npm run start```. A pagina estara disponivel em ```http://localhost:3000/```



