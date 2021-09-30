import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import TodoItem from "../to-do-Items/TodoItem";
import todosData from "../to-do-Items/todosData";

import "./List.css";

function List() {
  let obj;
  const [Textdata, setTextdata] = useState("");
  let newArray = todosData;

  const [printList, setPrintList] = useState(
    newArray.map((item) => <TodoItem key={item.id} item={item} />)
  );

  const handleAddListItem = () => {
    obj = { text: Textdata, completed: "false " };
    newArray.push(obj);
    setPrintList(
      newArray.map((item) => <TodoItem key={item.id} item={item} />)
    );
  };

  return (
    <div className="container">
      <div className="container-flex">
        <div className="heading">
          <h1> To-do List</h1>
        </div>

        <div className="list-contaier">
          <div className="view-list">
            <FaTasks size={25}/>
          </div>
          {printList}
        </div>
      </div>

      <div className="input-container">
        <input
          className="list-input"
          type="text"
          onChange={(e) => {
            setTextdata(e.target.value);
          }}
        />
        <button className="add-list-button" onClick={() => handleAddListItem()}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}

export default List;
