import React, { useState } from "react";

function Todo() {
  // State for storing tasks
  const [tasks, settasks] = useState([
    {
      id: 1,
      text: "Complete assignment 5",
      completed: false,
    },
  ]);

  // State for storing input text
  const [newTask, setnewTask] = useState("");

  // Function to handle input changes
  function handleChange(event) {
    setnewTask(event.target.value);
    console.log(newTask);
  }

  // Function to add a new task
  function handleAdd() {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    settasks((prevTasks) => [...prevTasks, task]);
    setnewTask("");
  }

  // Function to mark task as completed
  function handleCheck(id) {
    settasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Function to delete a task
  function handleDelete(id) {
    settasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <div className="todo-container">
      <h1>To do list</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheck(task.id)}
              />

              <span className={task.completed ? "check" : ""}>
                {task.text}
              </span>
            </div>

            <button
              className="delete-button"
              onClick={() => handleDelete(task.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;