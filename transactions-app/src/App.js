import React, { useEffect, useState } from 'react';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/api/transactions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar transações');
        }
        return response.json();
      })
      .then(data => {
        setTransactions(data.transactions);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div class="transaction-div">
    <h1>Lista de Transações</h1>
    <ul class="transaction-list">
      {transactions.map((transaction, index) => (
        <li key={index} class="transaction-item">
          <div class="transaction-id">
            <strong>Id:</strong>
             {transaction.id}
          </div>
          <div class="transaction-amount">
            <strong>valor:</strong> {transaction.amount}
          </div>
          <div class="transaction-type">
            <strong>Tipo:</strong> {transaction.type}
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default App;
