const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();


// ****************** Create Tasks *****************

router.post('/tasks', auth, async (req, res) =>
{
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e.message);
    }

    // const task = new Task(req.body);
    // task.save().then(() =>
    // {
    //     res.status(201).send(task);
    // }).catch((e) =>
    // {
    //     res.status(400).send(e.message);
    // })
})


// ****************** Read Task *****************


router.get('/tasks', auth, async (req, res) =>
{
    try {

        // below code also works

        // const  tasks = await Task.find({ owner: req.user._id })
        
        // ******* GET /tasks?completed=true
        // ******* GET /tasks?limit=10&skip=10  < --- Pagination - {{url}}/tasks?limit=2&skip=1
        // ******* GET /tasks?{{url}}/tasks?sortBy=createdAt:desc
        const match = {}
        const sort = {}

        if (req.query.completed) {
            match.completed = req.query.completed === 'true'
        }

        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(':')
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
        }

        await req.user.populate({
            path: 'task',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.task)

    } catch (e) {
        res.status(500).send(e.message);
    }

    
})


router.get('/tasks/:id', auth, async(req, res) =>
{
    const _id = req.params.id;
    try {
        // const task = await Task.findById(req.params.id);

        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (e) {
        res.status(404).send();
    }

    
})

router.patch('/tasks/:id', auth, async (req, res) =>
{
    const updates = Object.keys(req.body);
    const allowUpdates = ["description", "completed"];
    const isValidOperation = updates.every((update) => allowUpdates.includes(update));
    
    if (!isValidOperation) {
        return res.status(400).send("Error : Invalid update");
    }

    try {

        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})

        if (!task) {
            res.status(404).send();
        }

        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();
        res.status(200).send(task);
    } catch (e) {
        res.status(400).send(e.message);
    }
})


router.delete('/tasks/:id', auth , async (req, res) =>
{

    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task);
    } catch (e) {
        res.status(500).send();
    }

})

module.exports = router;