import { generateId } from "../Utils/generateId.js"

export class Task{
    constructor(data){
    this.id = data.id || generateId()
    this.completed = data.completed || false
    this.description = data.description
    }



    get Template(){
        return`
    <div>
        <input type="checkbox" onchange="app.tasksController.toggleTask('${this.id}')" ${this.completed ? 'checked' : ''} id="task" name="task" value="task">
        <label for="task">${this.description}</label><i onclick="app.tasksController.deleteTask('${this.id}')" class="mdi selectable mdi-delete-forever"></i>
    </div>
        `
    }
}