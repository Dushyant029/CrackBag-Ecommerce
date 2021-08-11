import { useState,useContext} from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import LoginDialog from '../Login/Login';
import {LoginContext} from '../../context/ContextProvider';
import Profile from "./Profile";
import { useSelector } from "react-redux";

const useStyle = makeStyles(theme => ({
    login: {
        color: '#f46f4e',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#f46f4e',
            color: '#FFFFFF'
        }   
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#f46f4e',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }    
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        } 
    },
    container: {
        display: 'flex',
        marginLeft: 40,
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
}));

const HeaderButtons = () => {    
    const classes = useStyle();
    const [open,setOpen] = useState(false);
    const {account,setAccount} = useContext(LoginContext);
    const {cartItems} = useSelector(state => state.cart);
    const openLoginDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <Link>
                    <Button variant="contained" onClick={() => openLoginDialog() } className={classes.login}>Login</Button>
                </Link>
            }           
            <Link to='/'>
                <Typography style={{marginTop: 2}}>More</Typography>
            </Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>                
                <Typography style={{marginLeft: 1}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default HeaderButtons;
