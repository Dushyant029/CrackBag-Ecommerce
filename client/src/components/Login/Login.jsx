import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    pic: {
        backgroundImage: `url(${'https://github.com/Dushyant029/CrackBag-Ecommerce/blob/9f7a687b3e8f84cc0579bea158e28d6540f0c119/images/login-icon.png?raw=true'})`,
        background: '#fcecb4',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginBtn: {
        textTransform: 'none',
        background: '#F46F4E',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    requestBtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#64ccdb',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#64ccdb',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    }
});

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like youre new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

const loginInitialValues = {
    username: '',
    password: '',
}

const Login = ({open, setOpen, setAccount}) => {
    const classes = useStyle();
    
    const [account,toggleAccount] = useState(initialValue.login);
    const [signup,setSignup] = useState(signupInitialValues);
    const [login,setLogin] = useState(loginInitialValues);
    const [error,setError] = useState(false);
    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login)
    }

    const toggleUserAccount =  () => {
        toggleAccount(initialValue.signup)
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username)
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(!response){
            setError(true); 
            return;
        }
        handleClose();
        setAccount(login.username)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup,[e.target.name]:e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login,[e.target.name]:e.target.value });
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box style={{display:'flex'}}>
                    {
                        account.view==='login' ?
                    <Box className={classes.login}>
                        <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                        <TextField onChange={(e) => onValueChange(e)} type="password" name='password' label='Enter Password' />
                        { error && <Typography className={classes.error}>Invalid username or password</Typography>}
                        <Typography className={classes.text}>By continuing, you agree to Crackbag's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained" onClick={()=> loginUser()} className={classes.loginBtn}>Login</Button>
                        <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                        <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                        <Typography className={classes.createText} onClick={()=> toggleUserAccount()}>New to Crackbag? Create an account</Typography>
                    </Box> :
                    <Box className={classes.login}>
                        <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                        <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                        <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                        <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                        <TextField onChange={(e) => onInputChange(e)} name='password' type="password" label='Enter Password' />
                        <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number' />
                        <Button variant="contained" onClick={()=> signupUser()} className={classes.loginBtn}>Signup</Button>
                    </Box>
                    }
                    <Box className={classes.pic}>
                        <Typography variant="h5" style={{color:'#000'}}>{account.heading}</Typography>
                        <Typography style={{marginTop: 20, color:'#000'}}>{account.subHeading}</Typography>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;