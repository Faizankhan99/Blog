const express = require('express')
const mongoose = require('mongoose')
const blogRouter = require("./Routes/BLog")
const cors=require("cors")
const UserRouter=require("./Routes/User")

const app = express()

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => res.send('hello'))

app.use("/blog", blogRouter)
app.use("/user", UserRouter)



app.listen(8080, async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/Blog")
        console.log('server started on port 8080')
    })


