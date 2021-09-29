import React from 'react'
import TodoItem from '../to-do-items/TodoItem'

import './List.css'

function List() {
    return (
        <div className="container">

            <div className="container-flex">
            <div className="heading">
              <h1> To-do List</h1>
            </div>

            <div className="list-contaier">
               <TodoItem/>
            </div>

            </div>
           
        </div>
    )
}

export default List
