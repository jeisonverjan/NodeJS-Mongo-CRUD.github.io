import Task from "../models/Task"

export const renderTasks = async(req, res) => {
    const tasks = await Task.find().lean()
    res.render('home', {tasks: tasks})
}

export const editTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()
        res.render('edit', {task: task})
    } catch (error) {
        console.log(error.message)
    }
}

export const editTaskPost = async(req, res) => {
    try {
        const {id} = req.params
        await Task.findByIdAndUpdate(id, req.body)
        res.redirect('/')    
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params
        await Task.findByIdAndRemove(id)
        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}

export const createTask = async(req, res) => {
    try {
        const task = Task(req.body)
        await task.save()
        
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

export const toggleDone = async(req, res) => {
    const {id} = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()
    console.log(task)
    res.redirect('/')
}