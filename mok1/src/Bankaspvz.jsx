import './App.scss';
// import './bank.scss';
import './buttons.scss';
import './form.scss';
import { useEffect, useState } from 'react';

function Bank() {
    const [accounts, setAccounts] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [balance, setBalance] = useState(0);
  
    const addAccount = () => {
      const newAccount = {
        firstName: firstName,
        lastName: lastName,
        balance: balance
      };
      setAccounts([...accounts, newAccount]);
      setFirstName('');
      setLastName('');
      setBalance(0);
    }
  
    const deleteAccount = (index) => {
      const newAccounts = [...accounts];
      newAccounts.splice(index, 1);
      setAccounts(newAccounts);
    }
  
    const deposit = (index, amount) => {
      const newAccounts = [...accounts];
      newAccounts[index].balance += amount;
      setAccounts(newAccounts);
    }
  
    const withdraw = (index, amount) => {
      const newAccounts = [...accounts];
      newAccounts[index].balance -= amount;
      setAccounts(newAccounts);
    }
  
    const sortAccounts = () => {
      const newAccounts = [...accounts];
      newAccounts.sort((a, b) => a.lastName.localeCompare(b.lastName));
      setAccounts(newAccounts);
    }
  
    return (
      <div className="bank">
        <h1>Bankas</h1>
        <div className="bank-input">
          <input type="text" placeholder="Vardas" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          <input type="text" placeholder="Pavardė" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          <input type="number" placeholder="Balansas" value={balance} onChange={(event) => setBalance(event.target.value)} />
          <button onClick={addAccount}>Pridėti sąskaitą</button>
        </div>
        <div className="bank-accounts">
          <h2>Sąskaitų sąrašas</h2>
          <table>
            <thead>
              <tr>
                <th>Vardas</th>
                <th>Pavardė</th>
                <th>Sąskaitos suma</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => (
                <tr key={index}>
                  <td>{account.firstName}</td>
                  <td>{account.lastName}</td>
                  <td>{account.balance}</td>
                  <td>
                    <button onClick={() => deleteAccount(index)}>Ištrinti</button>
                    <button onClick={() => deposit(index, 100)}>Pridėti lėšų</button>
                    {/* <button onClick={() => withdraw(index, 100)}>Nuskaičiuoti lėšas</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button onClick={sortAccounts}>Rūšiuoti pagal pavardę</button> */}
        </div>
      </div>
    );
  }
  
  export default Bank;