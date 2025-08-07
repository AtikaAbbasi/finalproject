import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbconnection from './config/db.js'
import authRoute  from "./routes/authroutes.js"
import questionRoutes from './routes/questionroutes.js'
let app = express()

dotenv.config()
dbconnection()

//middlewaere

app.use(express.json())
app.use(cors())

app.use('/api/auth' , authRoute)
app.use('/api', questionRoutes);



app.get('/', (req, res)=>{
    res.send('hello final Assginment......................')
})




app.listen(process.env.PORT , ()=> console.log(`server is running on port ${process.env.PORT}`)


)