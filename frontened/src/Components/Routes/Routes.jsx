import React from 'react'
import { Route } from "react-router-dom"
import Login from '../User/Login'
import Register from '../User/Register'
import Navbar from './Navbar'
import Home from '../Dashboard/Home'
import AddTeacher from '../Dashboard/AddTeacher'
import Details from '../Dashboard/Details'


export default function Routes() {
    return (
        <>
           
            <Route path="/" exact component={Navbar} /> 
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Home} />
            <Route path="/add" component={AddTeacher} />
            <Route path="/details/:id" component={Details} />
           
           
            </> 
    )
}
