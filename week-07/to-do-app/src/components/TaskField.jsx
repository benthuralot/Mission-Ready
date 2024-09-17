import { useState, useEffect } from "react";

export default function TaskField({ submitTask, handleUserInput, task }) {
  return (
    <div>
      <form className="form-control" onSubmit={submitTask}>
        <label htmlFor="task">Task</label>
        <input
          onChange={handleUserInput}
          type="text"
          id="task"
          placeholder="Please enter a task"
          value={task}
        />
        <button type="submit" className="btn btn-block">
          Save Task
        </button>
      </form>
      {task}
    </div>
  );
}
