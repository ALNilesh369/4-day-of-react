import React, {useState} from "react";
import "./Todo.css";

function ChallangeTask () {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if(newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, done: false }]);
        setNewTask("");
    }

    const deleteTask = (index) => {
        const updateTask = tasks.filter((_, i) => i !== index);
        setTasks(updateTask);
    };

    const toggleTask = (index) => {
        const updated = [...tasks];
        updated[index].done = !updated[index].done;
        setTasks(updated);
    };



    return (
        <div>
            <h2>Challan ToDo</h2>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter Taks" />
            <button onClick={addTask}> Add Task</button>

            {tasks.length === 0 ? (
                <p style={{ color: "gray" }}>No task yet</p>
            ) : 

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.done ? "done" : ""}>{task.text}
                    <button onClick={() => toggleTask(index)}>
                        {task.done ? "Undo" : "Done"}
                    </button>
                    <button onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
            }
        </div>
    )
}

export default ChallangeTask;