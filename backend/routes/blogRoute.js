import express from 'express';
import { addBlog, listBlogs, deleteBlog, singleBlog, updateBlog } from '../controllers/blogController.js';
import authUser from '../middleware/auth.js';

const blogRouter = express.Router();

// Route to add a new blog post
blogRouter.post('/add',authUser, addBlog);

// Route to get all blog posts
blogRouter.get('/list', listBlogs);

// Route to get a single blog post by ID
blogRouter.get('/single/:id', singleBlog);

// Route to delete a blog post by ID
blogRouter.post('/delete',authUser, deleteBlog);

//Route for updating a blog
blogRouter.post('/update',authUser, updateBlog);

export default blogRouter;
