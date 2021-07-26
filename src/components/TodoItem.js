import React from 'react'
// import '../styles/index.css'

function TodoItem(props){
    return(
        <div className="todo-item">
            {props.completed ? <input type="checkbox" checked/> : <input type="checkbox"/>}
            <label>{props.text}</label>
        </div>
    )
}

export default TodoItem