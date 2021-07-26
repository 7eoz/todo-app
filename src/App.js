import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './util/todosData'
import './styles/index.css'

function App() {
  const todoComponents = todosData.map(todo => <TodoItem key={todo.id} 
                                                          text={todo.text} 
                                                          completed={todo.completed} />)
  
  return(
  <div className="todo-list">
    {todoComponents}
  </div>
  )
}

export default App