
const express=require('express')
const app=express()

const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')

app.use(express.json())
app.use(express.static('E:/Task Manager/public'))

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)


const port=process.env.PORT || 3000


const start= async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Listening at port ${port}`))
    }
    catch(err)
    {
        console.log(err)
    }
}

start()


//app.get('/api/v1/tasks')
//app.post('/api/v1/tasks')
//app.get('/api/v1/tasks/:id')
//app.patch('/api/v1/tasks/:id')
//app.delete('/api/v1/tasks/:id')

/*
    MongoDB Atlas: 
    mongodb+srv://bha3naathanMB:<password>@mbbnodeprojects.buauwao.mongodb.net/?retryWrites=true&w=majority
*/