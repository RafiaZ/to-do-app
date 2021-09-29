import React, {useState} from "react";
import {FaEdit} from "react-icons/fa";
import {FaTrash} from 'react-icons/fa';

import todosData from "./todosData";

import "./TodoItem.css";



function TodoItem(props) {

       

  return (
      <>
 
    <div className="todo-item">
      <input className="checkbox" type="checkbox"  checked={props.item.completed}  />
      <p>{props.item.text}</p>

      </div>

      
    
    <div className="to-items-icons">
        <FaEdit/>
        <FaTrash/>
    </div>
      </>
  

  );
}

export default TodoItem;
