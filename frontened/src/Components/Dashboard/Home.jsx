
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { getTeacher } from '../../Redux/teacher/action.js';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Box, InputBase, IconButton, Button, TextField } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { updateTeacher, removeTeacher } from '../../Redux/teacher/action'
import Appbar from './Appbar'
import styles from './styles.module.css'
import Pagination from '@material-ui/lab/Pagination';
import ClassTable from './ClassTable'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: "flex",
        flexDirection: "row"
    },
    photo: {
        borderRadius: "20px",
        width: '100px',
        height: "100px"

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: "1px solid grey",
        margin: "2%",
        marginLeft: "30%",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '30%',
        float: "left"


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

    },
    paper1: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    link: {
        textDecoration: "none"
    },
    box: {
        marginRight: "20%"
    }
}));

export default function Home() {
    const classes = useStyles();
    const history = useHistory()
    const { user_id, loginData, loginStatus } = useSelector((state) => state.auth);
    const userData = JSON.parse(localStorage.getItem("UserDetails"))
    const data = useSelector((state) => state.teacher.teacherData);
    const { limit, total } = useSelector((state) => state.teacher);
    const dispatch = useDispatch()
    const [id, setId] = useState("")
    const [show, setShow] = useState(false)
    const [sort, setSort] = useState("")
    const [gen, setGen] = useState("")
    const [page, setPage] = useState("")
    const [count, setCount] = useState(1)
    const [classData, setClassData] = useState("")
    const [teac, setTeac] = useState({
        name: "",
        age: "",
        gender: "",
        class: [],
    });


    const getTeacherData = () => {

        let obj = {
            id: userData._id,
            sort: sort,
            gen: gen,
            page: page
        }
        dispatch(getTeacher(obj))
    }
    useEffect(() => {
        getTeacherData()
    }, [id, show, gen, sort, page])

    const handlePage = (e) => {

        setPage(e.target.innerText)
    }

    const handleEdit = (item) => {
        setId(item._id)
        setTeac(item)
        setCount(item.class.length)
        setClassData(item.class)
        setShow(true)
    }
    const handleDelete = (id) => {
        dispatch(removeTeacher(id))
        getTeacherData()
    }
    const handleUpdate = () => {
        const { name, age, gender} = teac
        let obj = {
            name, age, gender
        }
        dispatch(updateTeacher(obj, id))
        getTeacherData()
        setShow(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeac((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <>
            <Container>
                <Appbar />
                <div className={classes.root}>
                    <Pagination onChange={handlePage} count={total} color="secondary" />

                </div>
                {show ? <>
                    <Box >
                        <h1>Edit Teachers</h1>
                        <Box className={classes.paper1}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                value={teac.name}
                                onChange={handleChange}
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                value={teac.age}
                                onChange={handleChange}
                                id="age"
                                label="Age"
                                name="age"
                                autoComplete="name" />
                            <select value={teac.gender} name="gender"onChange={handleChange}>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <h1>Class</h1>
                            <ClassTable data={classData}/>
                        </Box>
                        <Button onClick={handleUpdate} variant="outlined">Update</Button>
                    </Box>

                </>
                    :
                    <>
                        <div className={styles.hoverDiv}>
                            Sort BY Order
                            <div className={`${styles.innerHoverDiv}`}>
                                <p onClick={() => setSort("")}>Sort</p>
                                <p onClick={() => setSort("asc")}>Ascending</p>
                                <p onClick={() => setSort("dsc")}>Descending</p>
                            </div>
                        </div>
                        <div className={styles.hoverDiv}>
                            sort By Gender
                            <div className={`${styles.innerHoverDiv}`}>
                                <p onClick={() => setGen("")}>Gender</p>
                                <p onClick={() => setGen("male")}>Male</p>
                                <p onClick={() => setGen("female")}>Female</p>
                            </div>
                        </div>
                        {data && data.map((item, i) => (
                            <>
                                <div key={i} className={classes.root}>
                                    <Grid key={i} container spacing={3}>
                                        <Grid item xs={12}>
                                            <Paper className={classes.paper}>
                                                <Box className={classes.box}>

                                                    {item.gender === "female" ?
                                                        <img className={classes.photo} src="https://www.flaticon.com/svg/static/icons/svg/163/163810.svg" alt="girl" />
                                                        :
                                                        <img className={classes.photo} src="https://www.flaticon.com/svg/static/icons/svg/2829/2829768.svg" alt="boy" />
                                                    }
                                                </Box>
                                                <Box>

                                                    <Link className={classes.link} to={`/details/${item.name}`}> {item.name}</Link><br />
                                         Age: {item.age}<br />
                                         Gender:   {item.gender}<br />
                                         Total Classes:   {item.class.length}<br />

                                                    <EditIcon onClick={() => handleEdit(item)} />
                                                    <DeleteIcon onClick={() => handleDelete(item._id)} />
                                                </Box>

                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </div>
                            </>
                        ))}
                    </>
                }


            </Container>
        </>
    )
}

