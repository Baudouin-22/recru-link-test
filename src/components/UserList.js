import {useState, useReducer} from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import User from './User.js'

// function filterUsers(users, filterString){
//   if(filterString===''){
//       return(users)
//   }else{
//       const newList = users.filter(
//         (user) =>
//          ((`${user.name.first}`).toLocaleLowerCase().includes(filterString.toLocaleLowerCase())
//         || (`${user.name.last}`).toLocaleLowerCase().includes(filterString.toLocaleLowerCase()))
//       )
//       return(newList)
//   }
// }

// function reducer(state, action){
//   switch(action.type){
//     case 'filterUsers':
//       return {...state, inputValue: action.searchWord, displayedUsers: filterUsers([...action.usersList], action.searchWord)}
//     default:
//       throw new Error()
//   }
// }

function UserList ({users}) {

  const [inputValue, setInputValue] = useState('');
  // const [state, dispatch] = useReducer(reducer, {displayedUsers: [...users], inputValue: ''})

  function handleInputChange(e){
    e.preventDefault()
    e.stopPropagation()
    setInputValue(e.target.value)
  }

    return (
        <Grid container  justifyContent="center" alignItems="left" >
        <Paper sx={{width: 700, height: 600, overflowY:'scroll', overflowX:'hidden', mt: 3}} elevation={3}>
            <Box
              sx={{
                width: 700,
                maxWidth: '100%',
              }}
            >
              <TextField
                  id="standard-search"
                  label="Search field"
                  type="search"
                  variant="standard"
                  fullWidth
                  sx={{mx:1, my:1}}
                  onChange={handleInputChange}
                  value={inputValue}
              />
            </Box>

          {users.map((user) => (
            ((`${user.name.first}`).toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
            || (`${user.name.last}`).toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
            && <div key={`${user.id.value}-${user.name.first}-${user.name.last}`}>
                  <User user={user}/>
              </div>
          ))}
        </Paper>
      </Grid>
    )
}

export default UserList