const mongoose = require('mongoose')



mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndexes: true,
    UseFindAndModify:false
})

// We are using this is in user.js file now

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value)
//         {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value)
//         {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Passwords cannot contain "password"');
//             }
//         }
//     },

//     age: {
//         type: Number,
//         default:0,
//         validate(value)
//         {
//             if (value < 0) {
//                 throw new Error('Age must be Positive Number..')
//             }
//         }
//     }
// })


// const me = new User({
//     name: "John   ",
//     email: "JohN@gmail.com",
//     password:"qwaszx12",
//     age:25
// })





// ***************** TASK MODEL *************************


// We are using this is in task.js file now



// const Task = mongoose.model('Task', {
   
//     description: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//    } 
// })



// const task = new Task({
//     description:"Start learning Mongoose",
//     completed: true
// })

// task.save().then((result) => { console.log(result) }).catch((err) => { console.log(err) });
