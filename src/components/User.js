import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';

import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import '../styles/User.css'

function User({user}){
    return(
        <div >
            <Paper
                sx={{
                    py: 2,
                    px:1,
                    margin: 'auto',
                    maxWidth: 600,
                    //flexGrow: 1,
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}

                elevation={0}
            >
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Avatar alt={`${user.name.first}-avatar`}
                        src={user.picture.large}
                        sx={{ width: 124, height: 124 }}
                        />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            {user.name.first} {user.name.last}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <EmailOutlinedIcon sx={{verticalAlign: 'middle'}} fontSize='small' colors='primary'/> <span>{user.email}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <PhoneOutlinedIcon sx={{verticalAlign: 'middle'}} fontSize='small' colors='primary'/> <span>{user.cell}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <PlaceOutlinedIcon sx={{verticalAlign: 'middle'}} fontSize='small' colors='primary'/> <span>{user.location.country}</span>
                        </Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Divider/>
        </div>
    )
}

export default User