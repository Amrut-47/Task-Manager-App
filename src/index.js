const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');


const app = express();
const port = process.env.PORT


app.use(express.json());
app.use(userRouter)
app.use(taskRouter);



// const multer = require('multer');
// const upload = multer(
//     {
//         dest: 'images',
//         limits: {
//                 fileSize: 1000000
//                 },
//         fileFilter(req, file, cb)
//         {
//             if (!file.originalname.match(/\.(doc | docs)$/)) {
//                 return cb(new Error('Please upload a word file'))
//             }

//             cb(undefined, true);
//         }
//         })

// app.post('/upload', upload.single('upload'), (req, res) =>
// {
//     res.send()
// }, (error, req, res, next) =>
// {
//     res.status(400).send({ error: error.message})
// })







// const main = async ()=>{

//       const task = await Task.findById('60bf7e79844ac34ad0705c95')
//       await task.populate('owner').execPopulate()
//       console.log(task.owner);

//     const user = await User.findById('62ba873d68c8db58a096b4f5')
//     await user.populate('task').execPopulate()
//     console.log(user.task);

// }

// main()



app.listen(port, () =>
{
    console.log("Server is up on port " + port);
})