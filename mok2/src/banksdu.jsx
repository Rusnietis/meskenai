// App.jsx
import { useState, useEffect } from 'react';
import './form.scss';
import './buttons.scss';
import './App.scss';
import axios from 'axios';


const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccountData, setNewAccountData] = useState({ firstName: '', lastName: '' });
  const [totalBalance, setTotalBalance] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('/api/accounts');
      setAccounts(response.data);
      updateStatistics(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  const updateStatistics = (accountsData) => {
    setCustomerCount(accountsData.length);
    const total = accountsData.reduce((sum, account) => sum + account.balance, 0);
    setTotalBalance(total);
  };

  const createAccount = async () => {
    try {
      await axios.post('/api/accounts', newAccountData);
      setNewAccountData({ firstName: '', lastName: '' });
      fetchAccounts();
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  const deleteAccount = async (accountId) => {
    try {
      await axios.delete(`/api/accounts/${accountId}`);
      fetchAccounts();
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const addFunds = async (accountId, amount) => {
    try {
      await axios.post(`/api/accounts/${accountId}/add-funds`, { amount });
      fetchAccounts();
    } catch (error) {
      console.error('Error adding funds:', error);
    }
  };

  const withdrawFunds = async (accountId, amount) => {
    try {
      await axios.post(`/api/accounts/${accountId}/withdraw-funds`, { amount });
      fetchAccounts();
    } catch (error) {
      console.error('Error withdrawing funds:', error);
    }
  };

  return (
    <div>
      <div id="statistics">
        <p>Klientų skaičius: {customerCount}</p>
        <p>Bendra suma: ${totalBalance.toFixed(2)}</p>
      </div>

      <div id="accountList">
        {accounts.map(account => (
          <div key={account.id} className="account">
            <span>{account.firstName} {account.lastName}</span>
            <span>Sąskaitos suma: ${account.balance.toFixed(2)}</span>
            <input
              type="number"
              placeholder="Įveskite sumą"
              value={newAccountData.amount}
              onChange={(e) => setNewAccountData({ ...newAccountData, amount: e.target.value })}
            />
            <button onClick={() => addFunds(account.id, newAccountData.amount)}>Pridėti lėšų</button>
            <button onClick={() => withdrawFunds(account.id, newAccountData.amount)}>Nuskaičiuoti lėšas</button>
            <button onClick={() => deleteAccount(account.id)} disabled={account.balance !== 0}>Ištrinti</button>
          </div>
        ))}
      </div>

      <div id="createAccount">
        <label htmlFor="firstName">Vardas:</label>
        <input
          type="text"
          id="firstName"
          value={newAccountData.firstName}
          onChange={(e) => setNewAccountData({ ...newAccountData, firstName: e.target.value })}
        />

        <label htmlFor="lastName">Pavardė:</label>
        <input
          type="text"
          id="lastName"
          value={newAccountData.lastName}
          onChange={(e) => setNewAccountData({ ...newAccountData, lastName: e.target.value })}
        />

        <button onClick={createAccount}>Sukurti sąskaitą</button>
      </div>
    </div>
  );
};

export default App;
