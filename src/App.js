import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './util/todosData'
import './styles/index.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
  this.setState(prevState => {
    const changedTodos = prevState.todos.map(todo => {
      if(todo.id === id){
        return {...todo,
                completed: !todo.completed
        }

      }
      return todo
    })
    return {
      todos: changedTodos
    }

    })
  }
  render() {  
      const todoItems = this.state.todos.map((item) => 
                      <TodoItem key={item.id}
                                id={item.id}
                                text={item.text} 
                                completed={item.completed}
                                handleChange={this.handleChange} />
                      )             
      return(
      <div className="todo-list">
        {todoItems}
      </div>
      )
    }
}

export default App