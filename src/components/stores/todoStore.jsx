import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: 'Go Shipping',
        complete: false
      }, {
        id: 235684679,
        text: 'Pay Bills',
        complete: false
      }
    ]
  }

  createTodo(text) {
    const id = Date.now()
    this.todos.push({id: id, text: text, complete: false})

    this.emit('change')
  }

  getAll() {
    return this.todos
  }

  handlerActions(action) {
    switch (action.type) {
      case 'CREATE_TODO':
        this.createTodo(action.text)
        break
      case 'RECEIVE_TODOS':
        this.todos = action.todos
        this.emit('change')
        break
    }
  }
}

const todoStore = new TodoStore
dispatcher.register(todoStore.handlerActions.bind(todoStore))
export default todoStore
