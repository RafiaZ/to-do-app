import React from "react";

import TodoItem from "../to-do-Items/TodoItem";
import todosData from "../to-do-Items/todosData";

import "./List.css";

function List() {



  const todosItems = todosData.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  return (
    <div className="container">
      <div className="container-flex">
        <div className="heading">
          <h1> To-do List</h1>
        </div>

        <div className="list-contaier" >{todosItems}
      </div>
        
      </div>
    </div>
  );
}

export default List;
