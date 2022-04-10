import React, { useState,useContext } from 'react'
import { Box, Button,makeStyles,Typography,Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import LoginDialog from "../Login/LoginDialog"
import { LoginContext } from "../../context/ContextProvider";
import Profile from './Profile';

const useStyle = makeStyles({
    login: {
         color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        cursor:"pointer",
    },
    wrapper: {
             margin: '0 7% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color:"#fff",
           
            fontSize: 12,
            alignItems: 'center', 
        },
     
        
    }
    ,
    container: {
            display: "flex"
        }
})

const CustomButton = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    
    const openLoginDialog = () => {
        setOpen(true)
    }

  return (
      <Box className={classes.wrapper}>
         
          {
              account ? <Profile account={account} setAccount={setAccount} />:
                                <Button variant="contained" onClick={()=>openLoginDialog()} className={classes.login}>Login</Button>

}           
          
          <Typography style={{ marginTop: 7, fontSize: 15 }}>More</Typography>
          <Link to="/cart" className={classes.container}>
              
              <Badge badgeContent={4} color="secondary">
         <ShoppingCartIcon />
             </Badge>
              <Typography style={{ marginLeft: 10 }}>Cart</Typography>
          </Link>
          <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
   </Box>
  )
}

export default CustomButton;