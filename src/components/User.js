import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import '../styles/User.css'

function User({user}){

    const [checked, setChecked] = React.useState(false);

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
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    {user.name.first.toUpperCase()} {user.name.last.toUpperCase()}
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
                            <Grid item xs>
                                <Collapse in={checked}>
                                    <Typography variant="body2" color="text.secondary">
                                        Country :  <span>{user.location.country}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        State :  <span>{user.location.state}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        City :  <span>{user.location.city}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Street :  <span>{`${user.location.street.number}, ${user.location.street.name}`}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Post Code :  <span>{user.location.postcode}</span>
                                    </Typography>
                                </Collapse>
                            </Grid>
                        </Grid>
                        <Grid item>
                            { !checked ? <AddOutlinedIcon sx={{verticalAlign: 'middle'}} fontSize='large' colors='secondary' onClick={()=> setChecked(true)}/> : <RemoveOutlinedIcon sx={{verticalAlign: 'middle'}} fontSize='large' colors='secondary' onClick={()=> setChecked(false)}/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Divider/>
        </div>
    )
}

export default User