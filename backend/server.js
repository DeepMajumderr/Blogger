import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import blogRouter from './routes/blogRoute.js'

// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/blog', blogRouter)

app.get('/',(req,res)=>{
    res.send("Blog API working")
})

app.listen(port, ()=> console.log('Server started on port ' + port))