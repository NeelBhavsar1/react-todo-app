import { useState } from "react"
import "./index.css"

function TodoList() {

    const [tasks, setTasks] = useState([])

    const [newTask, setNewTask] = useState("")

    const handleinpchange = (event) => {
        setNewTask(event.target.value)

    }

  
    const addTask = () => {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
        setNewTask("")
        }
    }

    const deleteTask = (index) => {
        const updatedtasks = tasks.filter((_, i ) => i !== index)
        setTasks(updatedtasks)
    }

    const moveTaskUp= (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index-1], updatedTasks[index] ];
            setTasks(updatedTasks);
        }

    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index] ];
            setTasks(updatedTasks);
        }

    }



    return (
        <div className="todo-container">
            <h1 className="todo-container-h">To do List</h1>

            <div className="form-field">
                <input 
                type="text" 
                placeholder="Enter a task..." 
                value={newTask} 
                onChange={handleinpchange}
                />

                <button className="form-btn" onClick={addTask}>Add</button>
            </div>

            {/*Rendering tasks on screen using map fnction */}
            <ul className="task-list">
                {tasks.map((task, index) => {
                    return <li key={index}>
                        <span className="task-text">{task}</span>


                        <button className="move-btn" onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>

                        <button className="move-btn" onClick={() => moveTaskDown(index)}>
                            ⬇️
                        </button>
                        
                        <button className="delete-btn" onClick={() => deleteTask(index)}>
                            🗑️
                        </button>

                        
                    </li>
                    
                })}
            </ul>
            
            <footer>
                <p>&copy;{new Date().getFullYear()} Neel Bhavsar's To-Do App</p>
            </footer>
        </div>

        
    )
}

export default TodoList