import React from 'react'
import Todo from '../todo'
import * as TodoActions from '../actions/todoActions'
import TodoStore from '../stores/todoStore'

export default class Todos extends React.Component {
  constructor() {
    super()
    this.getTodos = this.getTodos.bind(this)
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on('change', this.getTodos)
    console.log('count', TodoStore.listenerCount('change'))
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos)
  }

  getTodos() {
    this.setState({todos: TodoStore.getAll()})
  }

  reloadTodos() {
    TodoActions.reloadTodos()
  }

  render() {
    const {todos} = this.state
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>
    })
    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <input type="text"/>
        <h1>Todos</h1>
        <ul class="list-group">{TodoComponents}</ul>
      </div>
    )
  }
}
