import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/auth/action'
import{Redirect,useHistory} from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function Register() {
    const dispatch = useDispatch();
    const history = useHistory()
    const { isError, message, validation, registerStatus } = useSelector((state) => state.auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerUser({ name, email, password }));
        alert('logged in')
        

    }
   

    return (
    <>
        { registerStatus?<Redirect to = "/login" /> :
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Register
				</Typography>
            <form
                className={classes.form}
                noValidate
                onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(registerUser({ name, email, password }));
                    history.push('/login')
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="name"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                        />
                        {validation &&
                            validation.split(' ')[0] === '"name"' && (
                                <FormHelperText error>{validation}</FormHelperText>
                            )}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {validation &&
                            validation.split(' ')[0] === '"email"' && (
                                <FormHelperText error>{validation}</FormHelperText>
                            )}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {validation &&
                            validation.split(' ')[0] === '"password"' && (
                                <FormHelperText error>{validation}</FormHelperText>
                            )}
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Register
					</Button>
                <Grid container justify="flex-end">
                    {isError && (
                        <Grid item xs>
                            <Typography variant="subtitle1" component="h3" gutterBottom color="error">
                                {message}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </form>
        </div>
    </Container>
            }
            </>
    );
}