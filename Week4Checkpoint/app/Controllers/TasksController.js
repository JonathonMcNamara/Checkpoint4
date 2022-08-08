import { Pop } from "../Utils/Pop.js"
import { tasksService } from "../Services/TasksService.js"
import { ProxyState } from "../AppState.js"
import { sandboxApi } from "../Services/AxiosService.js"


function _drawTasks(){
    let template = ''
    let tasks = ProxyState.tasks
    tasks.forEach(t => template += t.Template)
    document.getElementById('list').innerHTML = template
    document.getElementById('tasks').innerHTML = `
    <span id="tasks">${ProxyState.tasks.filter(t => t.completed).length}/${ProxyState.tasks.length}</span>
    `

}

export class TasksController{
    constructor(){
    console.log('todo list controller loaded')
    ProxyState.on('tasks',_drawTasks)
    this.getTasks()
    }




    async getTasks(){
        try {
        await tasksService.getTasks()    
        } catch (error) {
        console.error("[getting items]",error)
        Pop.error(error)
        }
    }

    async createTask(){
        try {
        window.event.preventDefault()
        let form = window.event.target
        
        let newTask = {
        description: form.description.value
        }

        await tasksService.createTask(newTask)
        form.reset()
        } catch (error) {
        console.error("[Creating task]",error)
        Pop.error(error)
        }
    }

    async deleteTask(id){
        try {
        const yes = await Pop.confirm('Delete Task')
        if (!yes) { return } 
        await tasksService.deleteTask(id)
        } catch (error) {
        console.error("[Deleting Spell]",error)
        Pop.error(error)
            
        }
    }

    async toggleTask(taskId){
    try {
    await tasksService.toggleTask(taskId)
    } catch (error) {
    console.error("[Toggling Task]",error)
    Pop.error(error)  
    } 
    }
}






