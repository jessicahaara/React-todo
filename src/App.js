import { useState } from 'react'
import './App.css'
import { date } from './date'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo, time) => {
    setTodos([...todos, { title: todo, done: false, time, expired: false }])
  }

  const doneWithTodo = (i) => {
    let newTodoList = [...todos]
    newTodoList[i].done = !newTodoList[i].done
    setTodos(newTodoList)
  }

  const removeTodo = (i) => {
    let newTodoList = [...todos]
    newTodoList.splice(i, 1)
    setTodos(newTodoList)
  }

  const sortTodoList = (sortBy, sortByDesc) => {
    let newTodoList = [...todos]

    switch (sortBy) {
      case 'name':
        newTodoList = !sortByDesc
          ? newTodoList.sort((a, b) => a.title.localeCompare(b.title))
          : newTodoList.sort((a, b) => b.title.localeCompare(a.title))
        setTodos(newTodoList)
        break
      case 'time':
        newTodoList = !sortByDesc
          ? newTodoList.sort((a, b) => a.time.localeCompare(b.time))
          : newTodoList.sort((a, b) => b.time.localeCompare(a.time))
        setTodos(newTodoList)
        break
    }
  }

  return (
    <div className="App">
      <h1>Dagens Todos</h1>
      <div className="list">
        <h2>
          {date.dayOfWeek}, {date.day} {date.month}
        </h2>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          sortTodoList={sortTodoList}
          doneWithTodo={doneWithTodo}
        />
      </div>
    </div>
  )
}

export default App
