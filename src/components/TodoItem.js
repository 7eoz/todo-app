import React from 'react'

function TodoItem(props){
    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.completed}
                onChange={() => props.handleChange(props.id)}/>
            {props.completed ? <del>{props.text}</del> : <label>{props.text}</label>}
        </div>
    )
}

export default TodoItem