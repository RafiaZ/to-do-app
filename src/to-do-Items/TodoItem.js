import React, {useState} from "react";

import todosData from "./todosData";

import "./TodoItem.css";



function TodoItem(props) {

    const [checked, setChecked] = useState(props.item.completed);


       

  return (
    <div className="todo-item">
      <input  type="checkbox"  checked={props.item.completed} onChange={handleClick} />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
