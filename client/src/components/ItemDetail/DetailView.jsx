import { Box, makeStyles, Typography, Table, TableBody, TableRow, TableCell, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import clsx from 'clsx';
import {LocalOffer as Tag} from '@material-ui/icons';
import ActionItems from "./ActionItems";

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 65,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFF',
        margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color:'#878787'
    },
    price: {
        fontSize: 28
    },
    tag: {
        fontSize: 14,
        marginRight: 15,
        color: '#00cc00'
    }
}));

const DetailView = ({match}) => {
    const classes = useStyle();
    const cassured = 'https://github.com/Dushyant029/CrackBag-Ecommerce/blob/4990855a1b850a10b80ed4ac1c1ad835137793ae/images/cassured.png?raw=true';
    const sellerURL = 'https://github.com/Dushyant029/CrackBag-Ecommerce/blob/2853ea3e979f4cfa19365396c412420db4388945/images/supercoin.png?raw=true';
    const {products} = useSelector(state => state.getProductDetails);
    const date = new Date(new Date().getTime() + (5*24*60*60*1000));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch, match]);

    return (
        <Box className={classes.component}>
            { products && Object.keys(products).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems products={products} />                
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer} >
                        <Typography>{products.title.longTitle}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)}>
                            8 Ratings & 1 Review
                            <span><img src={cassured} style={{width: 77, marginLeft: 20 }} alt="" /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{products.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{products.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#388e3c'}}>{products.price.discount} off</span>
                        </Typography>
                        <Typography style={{marginTop: 20, fontWeight: 600}}>Available Offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Tag className={classes.tag}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</Typography>
                            <Typography><Tag className={classes.tag}/>Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik T&C</Typography>
                            <Typography><Tag className={classes.tag}/>Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply T&C</Typography>
                            <Typography><Tag className={classes.tag}/>Bank Offer10% Off on First time ICICI Mastercard Credit Card transaction, Terms and Condition apply T&C</Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹50</TableCell>
                                </TableRow>    
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>    
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{color: '#2874f0'}}>SuperComNet</span>
                                        <Typography>GST Invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <img src={sellerURL} alt="" style={{width: 390}} />
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>{products.description}</TableCell>
                                </TableRow>        
                            </TableBody>    
                        </Table>    
                    </Grid>                    
                </Grid>
            }
        </Box>
    )
}

export default DetailView;