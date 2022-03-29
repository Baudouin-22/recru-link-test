import { useEffect, useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import User from './User.js'

import { usersDatas } from '../datas/usersDatas';
import { useRemoteData } from '../datas/usersDatas';
import '../styles/App.css';

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
    <Grid container  justifyContent="center" alignItems="left" >
      <Paper sx={{width: 700, height: 600, overflow:'scroll', mt: 3}} elevation={3}>
        {users.map((user) => (
          <div key={user.id.value}>
            <User user={user}/>
          </div>
        ))}
      </Paper>
    </Grid>

  )
}

export default App;
