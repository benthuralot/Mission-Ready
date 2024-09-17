import { useState, useEffect } from "react";

export default function TaskField({ submitTask, handleUserInput }) {
  const [task, setTask] = useState("");
  //create a state variable taskArray to store the list.
  const [taskArray, setTaskArray] = useState([]);

  const submitTask = (e) => {
    e.preventDefault();
    // Add a new task to the taskArray and clear the input
    if (task.trim() !== "") {
      setTaskArray([...taskArray, task]);
      setTask(""); // Clear the input after adding a task
    } else {
      alert("Please enter a task!");
    }
  };
  useEffect(() => {
    console.log(task, taskArray);
  }, [taskArray]);

  const handleUserInput = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form className="form-control" onSubmit={submitTask}>
        <label htmlFor="task">Task</label>
        <input
          onChange={handleUserInput}
          type="text"
          id="task"
          placeholder="Please enter a task"
        />
        <button type="submit" className="btn btn-block">
          Save Task
        </button>
      </form>
      {task}
    </div>
  );
}
