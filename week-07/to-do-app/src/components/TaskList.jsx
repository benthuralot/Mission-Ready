import React, { useState, useEffect } from "react";

export default function TaskList({ taskArray, deleteTask, updateTask }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    // Set the edit value when editingIndex changes
    if (editingIndex !== null) {
      setEditValue(taskArray[editingIndex]);
    } else {
      setEditValue("");
    }
  }, [editingIndex, taskArray]);

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleUpdateClick = () => {
    updateTask(editingIndex, editValue);
    setEditingIndex(null);
    setEditValue("");
  };

  const handleCancelClick = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  return (
    <div>
      <h2>TaskList</h2>
      {taskArray.map((task, index) => (
        <div className="task" key={index}>
          {editingIndex === index ? (
            <div>
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
                className="edit-input"
              />
              <div className="edit-btns">
                <button onClick={handleUpdateClick} className="btn btn-update">
                  Update
                </button>
                <button onClick={handleCancelClick} className="btn btn-cancel">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="task">
                {index + 1}. {task}{" "}
                <button
                  onClick={() => setEditingIndex(index)}
                  className="edit-icon"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="delete-icon"
                >
                  ❌
                </button>
              </h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
