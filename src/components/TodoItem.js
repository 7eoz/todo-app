import React from 'react'
import '../styles/index.css'

function TodoItem(){
    return(
        <div className="todo-item">
            <input type="checkbox"/>
            <label>Task 1</label>
        </div>
    )
}

export default TodoItem