const { Router } = require("express")
const User = require("../../models/User")
const jwt = require("jsonwebtoken")
const app = Router()

app.get("/", async(req, res) => {
    const userdata =await User.find({})
    res.send(userdata)
})

app.get("/:id", async(req, res) => {
    const { id } = req.params;
    const token = req.header.authorization
    try {
        if (!token) {
            res.send("Unauthorized")
        } else {
            let verify = jwt.verify(token, "SECRET1234")
            let user = await User.findById(id) 
            res.send(user)
        }
        
    } catch (err) {
        res.send(err.message)
    }

})


app.post("/signup", async(req, res) => { 
    const { name, email, password } = req.body;
    try {
        let user=await User.findOne({email})
        if (user) {
            res.send({status:false,message:"Email already exists" })
        } else {
            const userdata = await User.create({ name, email, password })
            res.send({status:true,message:"User created succefully", userdata })    
        }
    } catch (err) {
        res.send(err.message)

    }

})


app.post("/login", async(req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email, password })
        if (!user) {
          return  res.status(401).send("User Not exist")
        }

    const token = jwt.sign({ id: user._id, email:user.email, }, "SECRET1234", { expiresIn: "8 hours" });
   res.send({message:"login success",token})

    } catch (err) {
        res.send(err.message)
          }


})

module.exports = app;