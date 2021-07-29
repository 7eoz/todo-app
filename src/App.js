import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './util/todosData'
import './styles/index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoComponents: todosData.map((todo) => 
                      <TodoItem key={todo.id} 
                                text={todo.text} 
                                completed={todo.completed} />
                      )
    }
  }
  render() {               
      return(
      <div className="todo-list">
        {this.state.todoComponents}
      </div>
      )
    }
}

export default App