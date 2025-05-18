import blogModel from "../models/blogModel.js"
// adding a new blog
const addBlog = async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        // Basic validation
        if (!title || !content || !userId) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const newBlog = new blogModel({
            title,
            content,
            author: userId,
        });

        const savedBlog = await newBlog.save();

        res.json({ success: true, message: "Blog created successfully", blog: savedBlog });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// listing all blogs
const listBlogs = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 6; // Blogs per page
        const skip = (page - 1) * limit;

        const totalBlogs = await blogModel.countDocuments();
        const totalPages = Math.ceil(totalBlogs / limit);

        const blogs = await blogModel.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.json({
            success: true,
            blogs,
            currentPage: page,
            totalPages,
            totalBlogs
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// deleting a blog
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.body;

        const blog = await blogModel.findById(id);

        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        await blogModel.findByIdAndDelete(id);

        res.json({ success: true, message: "Blog deleted successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const singleBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await blogModel.findById(id);

        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        res.json({
            success: true,
            blog,
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};




// updating a blog
const updateBlog = async (req, res) => {
    try {
        const { id, title, content, userId } = req.body;

        // Basic validation
        if (!id || !title || !content || !userId) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Find and update the blog in one operation
        const updatedBlog = await blogModel.findOneAndUpdate(
            { _id: id, author: userId },
            { title, content },
            { new: true }
        );

        if (!updatedBlog) {
            return res.json({
                success: false,
                message: "Blog not found or you're not authorized to edit it"
            });
        }

        res.json({
            success: true,
            message: "Blog updated successfully",
            blog: updatedBlog
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addBlog, listBlogs, deleteBlog, singleBlog, updateBlog }