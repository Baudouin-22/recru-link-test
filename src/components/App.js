import { useEffect, useState } from 'react';
import { usersDatas } from '../datas/usersDatas';
import { useRemoteData } from '../datas/usersDatas';
import '../styles/App.css';
import UserList from './UserList.js';

const axios = require('axios').default;

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    if(!useRemoteData.value){
      setUsers(usersDatas)
    }else{
      axios.get('https://randomuser.me/api')
      .then((response) => {
        setUsers(response.data.results)
        console.log('données :', response)
      })
      .catch((error)=>{
        console.log('Erreur :', error)
      })
    }
  },[])  

  return (
    <UserList users={users}/>
  )
}

export default App;
