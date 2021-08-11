import { Button, Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {AddShoppingCart as Cart, CreditCard as Buy} from '@material-ui/icons';
import { addToCart } from "../../redux/actions/cartActions";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth:'40%',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    pic: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button:{
        height: 50,
        width: '46%',
        borderRadius: 2
    },
    addToCart: {
        background: '#f46f4e',
        color: '#fff',
        marginRight: 10
    },
    buyNow: {
        background: '#64ccdb',
        color: '#fff'
    }
}));

const ActionItems = ({products}) => {
    
    const classes = useStyle();
    const history = useHistory();

    const dispatch = useDispatch();
    
    const addItemToCart = () => {
        dispatch(addToCart(products.id));
        history.push('/cart')
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({amount: 500, email:'dushireddy291@gmail.com'});
        
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={products.detailUrl} className={classes.pic} alt="" />
            <Button onClick={()=> addItemToCart()} variant="contained" className={clsx(classes.addToCart, classes.button)}><Cart />Add to Cart</Button>
            <Button onClick={()=> buyNow()} variant="contained" className={clsx(classes.buyNow, classes.button)}><Buy />Buy Now</Button>
        </Box>
    )
}

export default ActionItems;