const {MongoClient} =  require('mongodb')
const url ="mongodb://localhost:27017"
const database="student";

const client =  new MongoClient(url ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,family:4});

const dbConnect = async()=>{
    const res = await client.connect();
    const db = await res.db(database);
    return  db.collection('profile');
}

module.exports = dbConnect;