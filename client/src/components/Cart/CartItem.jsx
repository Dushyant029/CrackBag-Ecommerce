import {Card, Box, makeStyles, Typography, Button} from '@material-ui/core';
import clsx from 'clsx';
import GroupButtons from './GroupButtons';

const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    rightComponent: {
        margin: 20
    },
    smallText: {
        fontSize: 14
    },
    greyTextColor: {
        color: '#878787'
    },
    price:{
        fontSize: 18,
        fontweight: 600
    },
    pic:{
        height: 110,
        width: 110
    },
    removeBtn: {
        marginTop: 35,
        fontSize: 16
    }
})

const CartItem = ({item, removeItemfromCart}) => {
    const classes = useStyle();
    const cassured = 'https://github.com/Dushyant029/CrackBag-Ecommerce/blob/4990855a1b850a10b80ed4ac1c1ad835137793ae/images/cassured.png?raw=true';
    
    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img className={classes.pic} src={item.url} alt="" /> <br/>
                <GroupButtons />
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{marginTop:10}}>Seller:SuperComNet
                    <span><img src={cassured} style={{width:50,marginLeft:10}} alt="" /></span>
                </Typography>
                <Typography style={{margin:'20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color:'#388e3c'}}>{item.price.discount} off</span>
                </Typography>
                <Button className={classes.removeBtn} onClick={() => removeItemfromCart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;