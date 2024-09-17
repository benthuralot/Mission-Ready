import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  //create a state variable taskArray to store the list.
  const [taskArray, setTaskArray] = useState([]);

  const submitTaskInApp = (e) => {
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

  const handleUserInputInApp = (e) => {
    setTask(e.target.value);
  };

  const deleteTaskInAppJS = function (indexOfCurrentTask) {
    //when I click delete button,
    //this function should give me a new taskArray without the deleted task
    const newTaskArray = [...taskArray];
    // Step1: use array.splice() to remove task
    newTaskArray.splice(indexOfCurrentTask, 1);
    //step2:return a new task array
    setTaskArray(newTaskArray);
  };

  const updateTaskInAppJS = (index, newTaskValue) => {
    const newTaskArray = [...taskArray];
    newTaskArray[index] = newTaskValue;
    setTaskArray(newTaskArray);
  };

  return (
    <>
      <div className="container">
        <Header userName="Hershyl" />
        <TaskField
          submitTask={submitTaskInApp}
          handleUserInput={handleUserInputInApp}
          task={task}
        />
        <TaskList
          taskArray={taskArray}
          deleteTask={deleteTaskInAppJS}
          updateTask={updateTaskInAppJS}
        />
      </div>
    </>
  );
}

export default App;
