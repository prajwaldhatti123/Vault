const {MongoClient} = require('mongodb');
require('dotenv').config();

const uri = process.env.dbURI

let dbInstance = null;

const connect2db = () =>{
    if(dbInstance){
        return Promise.resolve(dbInstance);
    }
    const client = new MongoClient(uri);

    return client.connect()
    .then(()=>{
        dbInstance = client.db("Auth");
        console.log("Atlas connected successfully!");
        return dbInstance;
    })
    .catch((err)=>{
        console.log("Error Connecting To DB : ", err);
        throw err;
    })
}
module.exports = {connect2db};