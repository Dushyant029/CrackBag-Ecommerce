import { AppBar, Toolbar, makeStyles, Typography, Box, withStyles, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import logo from '../../assets/images/log.png';
import sublogo from '../../assets/images/sublogo.png';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import {Link} from 'react-router-dom';
import {Menu} from '@material-ui/icons';
import { useState } from 'react';

const useStyle = makeStyles(theme =>({
    header: {
        background: '#fcecb4',
        height: 65
    },
    logos: {
        width: 45,
        height: 45,
        marginLeft: 4,
        marginTop: 4
    },
    sublogo: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 1,
        color: 'black',
        textDecoration: 'none'
    },
    subHeading: {
        fontSize: 9,
        fontStyle: 'italic',
        color: '#000'
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    headerButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }
}));

const ToolBar = withStyles({
    root:{
        minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem button>
                    <HeaderButtons />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>
                
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to='/' className={classes.component}>
                    <img src={logo} className={classes.logos} alt=""/>
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Crack <Box component="span" style={{color: '#64ccdb'}}>the Bag</Box></Typography>
                        <img src={sublogo} className={classes.sublogo} alt=""/>
                    </Box>
                </Link>
                <SearchBar />
                <span className={classes.headerButtons}><HeaderButtons /></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;