const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const TeacherRoutes = require('./route/routes')

app.use(cors())
app.use(express.json());


mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true
}, (err) => {
        if (err) {
            console.log("Connection to database failed")
        } else {
            console.log('Database is successfully connected')
        }
})

app.use('/api', TeacherRoutes)

app.listen(5000, () => {
    console.log('server is up and running on 5000')
})