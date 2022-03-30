import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import User from './User.js'

function UserList ({users}) {

    const [inputValue, setInputValue] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        e.stopPropagation()
        setInputValue(e.target.value)
    }

    // function filterUsers(filterString){
    //     if(filterString===''){
    //         return(users)
    //     }else{
    //         const newList = users.filter((user, filterString) => )
    //         return(newList)
    //     }
    // }

    return (
        <Grid container  justifyContent="center" alignItems="left" >
        <Paper sx={{width: 700, height: 600, overflowY:'scroll', mt: 3}} elevation={3}>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                fullWidth
                sx={{mx:2, mt:2}}
                onChange={handleInputChange}
				value={inputValue}
            />
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