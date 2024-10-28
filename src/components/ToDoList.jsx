import React, { useState } from "react";

// *************** CSS ****************
const box = {
  border: "2px solid black",
  height: "500px",
  width: "500px",
  backgroundColor: "aqua",
  padding: "20px",
};

const container = {
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
};

const listStyle = {
  marginTop: "20px",
  // listStyleType: "none",
};

// i have done the half things half thing done by charGPT cuz i enable to do it

function ToDoList() {
  // State for the task input and the task list
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Function to handle adding a task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      // Check if input is not empty
      setTaskList([...taskList, taskInput]); // Add new task to taskList
      setTaskInput(""); // Clear input after adding task
    } else {
      alert("u cant leave empty input filled");
    }
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  // Function to remove a task by index
  const removeTask = (indexToRemove) => {
    setTaskList(taskList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={container}>
      <div style={box}>
        <h1>Welcome to TO-DO-LIST</h1>
        <label htmlFor="taskInput">
          <b>Enter your Task</b>
        </label>
        <input
          style={{ marginLeft: "10px" }}
          id="taskInput"
          placeholder="Add a new task"
          type="text"
          value={taskInput}
          onChange={handleInputChange}
        />
        <button className="btn" onClick={addTask}>
          Add
        </button>

        {/* Display the task list */}
        <ul style={listStyle}>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={() => removeTask(index)}
                style={{ marginLeft: "150px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
