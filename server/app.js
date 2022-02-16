const express = require("express")


const app = express()

const cors = require('cors')

//database connection import
const connectDB  = require('./db/connect')

//router
const recordsRouter= require('./routes/routes.record')


//middleware
app.use(express.json())
app.use(cors())


//routes
app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO LIBRARY MANAGEMENT SYSTEM SERVER SIDE</h1> <a href ="/api/v1/">products</a>')
})


app.use('/api/v1',recordsRouter)



//port
const port =  3000

const start = ()=>{
    try {
        connectDB.connect(err=>{
            if(err){
                throw err
            }
            console.log('MY sql connected')
        }
        )
        app.listen(port,()=>{
            console.log(`Server is listening to port: ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()