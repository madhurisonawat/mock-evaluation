import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { Grid, Paper, Box } from '@material-ui/core'
    

export default function Details() {
    const params = useParams()
    const history = useHistory()
    let data = useSelector((state) => state.teacher.teacherData);
    let newData = data.filter((item) => item.name === params.id)

    
    return (
        <>
            {newData && newData.map((item) => (
                <Grid>
                    <Paper>
                        {item.gender === "female" ?
                            <img style={{width:"100px",borderRadius:"20px"}} src="https://www.flaticon.com/svg/static/icons/svg/163/163810.svg" alt="girl" />
                            :
                            <img style={{ width: "100px", borderRadius: "20px" }} src="https://www.flaticon.com/svg/static/icons/svg/2829/2829768.svg" alt="boy" />
                        }

                        <Box>
                           Name: {item.name}
                        </Box>
                        <Box>
                           Age: {item.age}
                        </Box>
                        <Box>
                            Total Classes: {item.class.length}
                        </Box>
                        <Box>
                           Section : {item.class[0].section}
                        </Box>
                        <Box>
                            Subject : {item.class[0].subject}
                        </Box>
                        <Box>
                            Gender : {item.gender}
                        </Box>
                    </Paper>

                </Grid>
            ))}
            <button style={{margin:"2%"}} onClick={()=>history.push('/dashboard')}>Back</button>
            
            </>
    )
}