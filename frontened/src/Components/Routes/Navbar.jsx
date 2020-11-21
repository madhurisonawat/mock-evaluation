import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography ,IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow:1
    },
    link: {
        color: "white",
        marginLeft: '5%',
        textDecoration: "none",
        fontSize:"24px"
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                
          </Typography>
                    <Link className={classes.link}to="/login">Login</Link>
                    <Link className={classes.link}to="/register">Register</Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}

