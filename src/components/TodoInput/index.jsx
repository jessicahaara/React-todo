import { useState } from 'react'
import './TodoInput.css'

const TodoInput = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('')
  const [time, setTime] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todoInput, time)
    setTodoInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        name="todoItem"
        placeholder="Jag måste..."
        onChange={(e) => setTodoInput(e.target.value)}
        required
      />
      <input
        type="time"
        name="todoTime"
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input type="submit" value="Lägg till" />
    </form>
  )
}

export default TodoInput
