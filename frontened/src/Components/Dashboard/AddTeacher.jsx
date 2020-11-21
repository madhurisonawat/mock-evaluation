import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, TextField,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { addTeacher } from '../../Redux/teacher/action'


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
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [section, setSection] = useState("")
    const [subj, setSubj] = useState("")
    const [section1, setSection1] = useState("")
    const [subj1, setSubj1] = useState("")
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory()
    const userData = JSON.parse(localStorage.getItem("UserDetails"))

    const handleAdd = () => {
        let obj = {
            name: name,
            age: age,
            class: [{
                section: section,
                subject: subj,
            },
          ],
            gender: gender,
            teacher_id: userData._id
        }
        dispatch(addTeacher(obj))
        history.push('/dashboard')
    }
    const handleShow = () => {
      setShow(true)
        
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
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    label="Name"
                    name="email"
                    autoComplete="name"
                    autoFocus/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                        onChange={(e) => setAge(e.target.value)}
                    id="age"
                    label="Age"
                    name="age"
                    autoComplete="name"/>
                <select value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <h1>Class</h1>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                        onChange={(e) => setSection(e.target.value)}
                    id="section"
                    label="Section"
                    name="section"
                    autoComplete="section"/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={(e) => setSubj(e.target.value)}
                    id="subject"
                    label="Subject"
                    name="subject"
                        autoComplete="subject" />
                    <Button onClick={handleShow}>want to add more classes </Button>
                    {show ?
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
                        :""}
                </Box>
                <Button onClick={handleAdd}variant="outlined">ADD</Button>
            </Box>
            </>
    )
}