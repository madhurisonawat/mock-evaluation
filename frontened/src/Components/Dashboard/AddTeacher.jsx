import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, TextField,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { addTeacher } from '../../Redux/teacher/action'
import ClassTable from './ClassTable'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'      
    },
  
}));
export default function AddTeacher() {
    const classes = useStyles();
    const userData = JSON.parse(localStorage.getItem("UserDetails"))
    const [teac, setTeac] = useState({
        name: "",
        age: "",
        gender: "",
        class: [],
        teacher_id: userData._id
    });
    const dispatch = useDispatch();
    const [cat, setCat] = useState({
        subject: "",
        section: "",
        grade:""
    })
    const[tab,setTab]=useState(false)
    const history = useHistory()
  

    const handleClass = (e) => {
        const { name, value } = e.target;
        setCat((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        
    }
    const handleChange = (e)=> {
        const { name, value } = e.target;
        setTeac((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleAdd = () => {

        dispatch(addTeacher(teac))
        history.push('/dashboard')
    }
    const handleShow = () => {
        //setShow(true)
        setTeac((prevState) => ({
            ...prevState,
            class: [...prevState.class, cat],
        }));
        setTab(true)
        
    }
    
    return (
        <>
            <Box >
                <h1>Add Teachers</h1>
                <Box className={classes.paper}>
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
                    autoFocus/>
                <TextField
                    variant="outlined"
                    margin="normal"
                        required
                        value={teac.age}
                        onChange={handleChange}
                    id="age"
                    label="Age"
                    name="age"
                    autoComplete="name"/>
                    <select value={teac.gender} name="gender"onChange={handleChange}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <h1>Class</h1>
                <TextField
                    variant="outlined"
                    margin="normal"
                        required
                        value={cat.section}
                    onChange={handleClass}
                    id="section"
                    label="Section"
                    name="section"
                    autoComplete="section"/>
                <TextField
                    variant="outlined"
                    margin="normal"
                        required
                        value={cat.subject}
                        onChange={ handleClass}
                    id="subject"
                    label="Subject"
                    name="subject"
                        autoComplete="subject" />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        value={cat.grade}
                        onChange={handleClass}
                        id="grade"
                        label="Grade"
                        name="grade"
                        autoComplete="grade" />
                    
                    {/* {show ?
                        <>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={(e) => setSection1(e.target.value)}
                                id="section"
                                label="Section"
                                name="section1"
                                autoComplete="section" />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                onChange={(e) => setSubj1(e.target.value)}
                                id="subject"
                                label="Subject"
                                name="subject1"
                                autoComplete="subject" />
                        </>
                        : ""} */}
                    <Button onClick={handleShow}>want to add more classes </Button>
                    {tab && <ClassTable data={teac.class}/>}
                    
                </Box>
                <Button onClick={handleAdd}variant="outlined">ADD</Button>
            </Box>
            </>
    )
}