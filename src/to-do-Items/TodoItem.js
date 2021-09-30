import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import todosData from "./todosData";

import "./TodoItem.css";

function TodoItem(props) {
  const [checked, setChecked] = useState(props.item.completed);

  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="todo-item">
        <input
          type="checkbox"
          className="item-checkbox"
          checked={checked}
          onChange={handleClick}
        />
        <p>{props.item.text}</p>
      </div>

      <div className="to-items-icons">
        <FaEdit />
        <FaTrash />
      </div>
    </>
  );
}

export default TodoItem;
