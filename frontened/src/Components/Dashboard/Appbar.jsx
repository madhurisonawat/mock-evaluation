
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { logout } from '../../Redux/auth/action'
import { useDispatch, useSelector } from 'react-redux';
import { searchTeacher } from '../../Redux/teacher/action';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Appbar() {
    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch();
    const[val,setVal]= useState("")
    const { loginStatus } = useSelector((state) => state.auth);
    const { teacherData } = useSelector((state) => state.teacher);
    const userData = JSON.parse(localStorage.getItem("UserDetails"))

    const handleSearch = () => {
        const id = userData._id
        dispatch(searchTeacher(id, val))
   }

    const handleAdd = () => {
        history.push('/add')
    }
 
    const handleLogout = () => {
        dispatch(logout())
        history.push('/login')
}
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                      DashBoard
          </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            value={val}
                            name="val"
                            onChange={(e) => setVal(e.target.value)}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <button onClick={ handleSearch}>Search</button>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                       
                       <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge  color="secondary">
                                <AddBoxIcon onClick={handleAdd}/>
                            </Badge>
                        </IconButton>
                        <button style={{ border: "none", outline: "none" ,background:"transparent",color:"white",fontSize:"20px"}}onClick={handleLogout}> Logout</button>
                        <AccountCircle />
                       
                       
                    </div>
                </Toolbar>
            </AppBar>
           
        </div>
    );
}
