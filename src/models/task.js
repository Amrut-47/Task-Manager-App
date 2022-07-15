const mongoose = require('mongoose')
const validator = require('validator')


const taskSchema = new mongoose.Schema({
   
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    } 
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)


// This one is we manually create. In index.js we use this there but create it at POSTMAN..


// const task = new Task({
//     description:"Start learning Mongoose",
//     completed: true
// })

// task.save().then((result) => { console.log(result) }).catch((err) => { console.log(err) });




module.exports = Task;