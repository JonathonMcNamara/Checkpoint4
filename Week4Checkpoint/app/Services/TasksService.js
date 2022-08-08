import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import { Task } from "../Models/Task.js";


class TasksService{
    
    async getTasks(){
        let res = await sandboxApi.get('/jon/todos');
        ProxyState.tasks = res.data.map(t => new Task(t))
    }

    async createTask(newTask){
    let res = await sandboxApi.post('/jon/todos',newTask)
    let task = new Task(res.data)
    ProxyState.tasks = [...ProxyState.tasks,task]
    }

    async deleteTask(id){
    await sandboxApi.delete(`/jon/todos/${id}`)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    async toggleTask(taskId){
    let task = ProxyState.tasks.find(t => t.id == taskId)
    task.completed = !task.completed
    let taskIndex = ProxyState.tasks.indexOf(task)
    let res = await sandboxApi.put(`/jon/todos/${taskId}`,task)
    let updatedTask = new Task(res.data)
    ProxyState.tasks.splice(taskIndex, 1 ,updatedTask)
    ProxyState.tasks = ProxyState.tasks
    }

}


export const tasksService = new TasksService();