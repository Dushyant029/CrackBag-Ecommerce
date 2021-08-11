import {Box, Typography, makeStyles} from '@material-ui/core';
import { navData } from "../../constants/data";

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    pic: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src = {data.url} className={classes.pic} alt="" />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>    
                ))
            }
        </Box>
    )
}

export default NavBar;