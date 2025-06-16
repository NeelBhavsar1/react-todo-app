import { useState } from "react";
import "./index.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);


  const [newTask, setNewTask] = useState("");


  const [editIndex, setEditIndex] = useState(null);


  const [editedTask, setEditedTask] = useState("");

  const handleinpchange = (event) => {
    setNewTask(event.target.value);
  };


  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }

  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };


  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index],];
      setTasks(updatedTasks);
      
    }
  };



  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index],];
      setTasks(updatedTasks);
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const saveTask = () => {
    if (editedTask.trim() === "") {
      return;
    }


    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditedTask("");
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditedTask("");
  };



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


      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />

                <button className="form-btn" onClick={saveTask}>Save</button>

                <button className="form-btn" onClick={cancelEdit}>Cancel</button>

              </>
            ) : (
              <>
                <span className="task-text">{task}</span>

                <button className="move-btn" onClick={() => moveTaskUp(index)}>
                  ⬆️
                </button>

                <button className="move-btn" onClick={() => moveTaskDown(index)}>⬇️</button>

                <button className="edit-btn" onClick={() => editTask(index)}>🖋️</button>
                <button className="delete-btn" onClick={() => deleteTask(index)}>🗑️</button>
              </>
            )}

          </li>

        ))}

      </ul>


      <footer>
        <p>&copy;{new Date().getFullYear()} Neel Bhavsar's To-Do App</p>
      </footer>
    </div>

  );
}

export default TodoList;
