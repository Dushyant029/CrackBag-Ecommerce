import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import {useHistory} from 'react-router-dom';

const useStyle= makeStyles({
    component: {
        margin: '80px 140px',
        width:'80%',
        background:'#fff',
        height:'65vh'
    },
    pic:{
        width:'12%'
    },
    container: {
        textAlign:'center',
        paddingTop:70,
        '& > *': {
            marginTop:10,
            fontSize: 14
        }
    },
    button: {
        marginTop:20,
        paddingTop: '12px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: '#f46f4e',
        color: '#fff'
    }
})

const EmptyCart = () => {
    const emptycarturl = 'https://github.com/Dushyant029/CrackBag-Ecommerce/blob/a1a0da5ccb5f0b2a75c36cd081c4666482a71939/images/empty.png?raw=true';
    const classes = useStyle();
    const history = useHistory();

    const addItem = () => {
        history.push('/')
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img className={classes.pic} src={emptycarturl} alt="" />
                <Typography>Your cart is Empty</Typography>
                <Typography>Add items</Typography>
                <Button className={classes.button} variant="contained" onClick={()=> addItem()}>Crack Now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart;