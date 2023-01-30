import dotenv from 'dotenv/config';
import app from './server.js'
import mongodb from 'mongodb'


 import ReviewsDAO from './dao/reviewsDAO.js'

const MongoClient= mongodb.MongoClient
const mongo_username= process.env.user
const mongo_password= process.env.password


const uri=`mongodb+srv://${mongo_username}:${mongo_password}@cluster0.j2lyxnj.mongodb.net/?retryWrites=true&w=majority`

const port = process.env.port;

MongoClient.connect(
    uri,{
        maxPoolSize:50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    });

