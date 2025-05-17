import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true},
    publishedAt: { type: Date, default: Date.now }
},{ timestamps: true })

const blogModel =mongoose.models.blog || mongoose.model("blog",blogSchema)

export default blogModel