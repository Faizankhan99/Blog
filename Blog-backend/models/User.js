const { mongoose, model, Schema } =require("mongoose")

const Userdata = new Schema({
    name: { type: "String", required: true },
    email: { type: "String", require: true },
    password: { type: "String", required: true },


})

const User = model("user",Userdata)
module.exports=User