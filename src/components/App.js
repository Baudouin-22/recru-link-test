import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
const axios = require('axios').default;

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api')
    .then((response) => {
      setUsers(response.data.results)
      console.log('données :', response)
    })
    .catch((error)=>{
      console.log('Erreur :', error)
    })
  },[])

  return (
    <div>
      {users.map((user) => (
        <div key={user.id.value}>
          <img src={user.picture.large} alt={`${user.name.first}-avatar`}/>
          <div>Name: {user.name.title} {user.name.first} {user.name.last}</div>
          <div>Email: {user.email}</div>
          <div>Sell: {user.cell}</div>
        </div>
      ))}
    </div>
  )
}

export default App;
