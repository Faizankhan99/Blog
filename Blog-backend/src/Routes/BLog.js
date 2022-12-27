const express = require("express")
const Blog = require("../../models/BLog")
const jwt = require("jsonwebtoken")
const app = express.Router();

app.get("/", async (req, res) => {
    const user = await Blog.find({})
    res.send(user)
})
app.post("/", async (req, res) => { 
    const { title, body,date,author} = req.body;
    try {
        const blog = await Blog.create({ title, body, date, author,imgUrl:"https://picsum.photos/200/300.jpg" })
        // blog.save()
        res.send({message:"BLog created succesfully"})
    } catch (err) { 
        res.send(err.message)
    }
})


module.exports = app

