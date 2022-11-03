const { mongoose, model, Schema } =require("mongoose")

const BlogData = new Schema({
    title: { type: "String", required: true },
    body: { type: "String", require: true },
    date:{type:"string"},
    author: { type: "String", required: true },
    imgUrl:{ type: "String",},

})

const Blog = model("blog",BlogData)
module.exports = Blog