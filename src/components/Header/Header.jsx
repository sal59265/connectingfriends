import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@mui/icons-material/Group';

import useStyles from './styles'

const Header = ({setCoordinates, friends, setFriends}) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete ] = useState(null);

  const onLoad = (autocomplete) => setAutocomplete(autocomplete) 

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat,lng});
    console.log({lat, lng})
  }
  // const onPlaceChangedFriends = () => {
  //   const lat1 = autocomplete.getPlace().geometry.location.lat();
  //   const lng1 = autocomplete.getPlace().geometry.location.lat();
    
  //   setCoordinates({})
  // }
  const toggle = () => {
    setFriends(!friends);
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Connecting Friends
        </Typography>
        {/* <Typography variant="h5" className={classes.title}>
          {friends ? <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search...' classes={{root: classes.inputRoot, input: classes.inputInput}}/>
          </div>
        </Autocomplete>: (<GroupIcon 
            onClick={toggle}
          />)}
        </Typography> */}
        <Box display="flex">
        <Typography variant="h6" className={classes.title}>
          Explore New Places
        </Typography>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search...' classes={{root: classes.inputRoot, input: classes.inputInput}}/>
          </div>
        </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;