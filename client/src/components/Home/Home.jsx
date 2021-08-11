import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, makeStyles } from "@material-ui/core";
import Slide from "./Slide";
import MidSection from "./MidSection";
// import { products } from "../../constants/data";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getProducts as listProducts} from '../../redux/actions/productActions';

const useStyle = makeStyles(theme => ({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
  leftComponent: {
    width: "83%",
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  rightComponent: {
    marginTop: 12,
    background: "#FFFFFF",
    width: "17%",
    marginLeft: 10,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
}));

const Home = () => {
    const classes = useStyle();

    const adURL =
    "https://github.com/Dushyant029/CrackBag-Ecommerce/blob/05520da206f19ba3aae0939d67a348ed263de672/images/poster1.png?raw=true";

    const {products} = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])

  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box className={classes.leftComponent}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={classes.rightComponent}>
            <img src={adURL} style={{ width: 230 }} alt="" />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Featured Brands" products={products} />
        <Slide timer={false} title="Recommended Items" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Bestsellers" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
      </Box>
    </div>
  );
};

export default Home;
