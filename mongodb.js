// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'New-TaskManger'


const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) =>
{
    if (error) {
        return console.log("Unable to connect Database.")
    }


    const db = client.db(databaseName);

   // ------------------------- Insertion Of Data --------------------------------------------


    // ---------------------------- insertOne --------------------------

    // db.collection('users').insertOne({ name: 'Amrut', age: 25 }, (error, result) =>
    // {
    //     if (error) {
    //         return console.log("Unable to insert")
    //     }
    //     console.log(result.insertedId);
    // })


     // ------------------------- insertMany -----------------------------


    // db.collection('users').insertMany([
    //     {
    //         name: 'Jame',
    //         age:25
    //     },
    //     {
    //         name: 'Holly',
    //         age:15
    //     }
    // ], (error,result) => 
    // {
    //     if (error) {
    //         return console.log("Unable to insert")
    //     }

    //     console.log(result.insertedIds);
    // })


    // -------------------- new collection named as => tasks -----------------------
    

    // db.collection('task').insertMany([
    //     {
    //         description: 'Learn MongoDB',
    //         completed: false
    //     },
    //     {
    //         description: 'Watch Movie',
    //         completed: true
    //     },
    //      {
    //         description: 'Go to Marktet',
    //         completed: false
    //     }
    // ], (error,result) => 
    // {
    //     if (error) {
    //         return console.log("Unable to insert")
    //     }

    //     console.log(result.insertedIds);
    // })

    
// ------------------------------- Find in mongodb -----------------------------

    // db.collection('users').findOne({name:'Frank',_id:new ObjectID("629e4557f38651e78592d48d")}, (error,user)=>{
    //     if(error){
    //         return console.log("Unable to find..!")
    //     }

    //     console.log(user)
    // })


    // db.collection('users').find({age:25}).toArray((error,user)=>{
    //     console.log(user);          
    // })

    // db.collection('task').findOne({ _id:new ObjectID("629ec142dc22d9ff93ef92a5")}, (error, result) =>
    // {
    //     console.log(result);
    // })
    
    // db.collection('task').find({ completed: true }).toArray((error, task) =>
    // {
    //     console.log(task);
    // })



    // ------------------- update in mongodb ----------------------------------------------------

    
    // db.collection('users').updateOne({ _id: new ObjectID("629ebf79dc46b538de799769") }, {
    //     $set: {
    //         name: 'Harshal'
    //     }
    // }).then((result) =>
    // {
    //     console.log(result);
    // }).catch((error) =>
    // {
    //     console.log(error);
    // })

   //  ------------------- $inc ------

    // db.collection('users').updateOne({ _id: new ObjectID("629ebf79dc46b538de799769") }, {
    //     $inc: {
    //         age: 5 // Increment age of user by 5 years
    //     }
    // }).then((result) =>
    // {
    //     console.log(result);
    // }).catch((error) =>
    // {
    //     console.log(error);
    // })
    
    
    //  ---------------- UpdaetMany ---------------------------
    
    
    // db.collection('task').updateMany({ completed: false }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) =>{console.log(result)}).catch((error) =>{console.log(error)})
    

    
    //  ---------------------- delete in mongodb --------------------------------------------
    
    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => { console.log(result) }).
    //     catch((error))
    
    db.collection('users').deleteOne(
        {
        age:25
    }
    ).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        log.error(error)
    })
})

