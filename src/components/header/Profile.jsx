import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography, makeStyles } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    component: {
        marginTop: 40,
    },
    logout: {
        fontSize: 14,
        marginLeft: 20
    }
})


const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
      const classes = useStyle();

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const logout = () => {
        setAccount("");
    }


  return (
      <>
          <Typography onClick={handleClick} style={{ marginTop: 8, fontSize:12 }}>{account}</Typography>
<Menu
  anchorEl={open}
  keepMounted
  open={Boolean(open)}
              onClose={handleClose}
              className={classes.component}
>
              <MenuItem onClick={()=>{handleClose(); logout();}}
                className={classes.logout}
              >
                  <PowerSettingsNewIcon fontSize="small" color="primary" />
                <Typography className={classes.logout}>Logout</Typography>
              </MenuItem>
</Menu>
 
      </>
  )
}

export default Profile