import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import { urlencoded } from 'body-parser'

const app = express()



// adding main configurations to the express app
app.use(cors({
    origin : process.env.CORS_ORIGIN, 
    Credentials : true
}))


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static('public'))
app.use(cookieParser())


// roouts import
import userRouter from './routes/user.routes.js'

// declaring routes
app.use('/api/v1/users', userRouter);
 
//  http://localhost:8000/api/v1/users/register

export {app};