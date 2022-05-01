import { useState } from 'react'
import './TodoList.css'

const TodoList = ({ todos, removeTodo, sortTodoList, doneWithTodo }) => {
  const [removable, setRemovable] = useState(false)
  const [nameSortDesc, setNameSortDesc] = useState(false)
  const [timeSortDesc, setTimeSortDesc] = useState(false)

  const handleNameSortClick = () => {
    sortTodoList('name', nameSortDesc)
    setNameSortDesc(!nameSortDesc)
  }
  const handleTimeSortClick = () => {
    sortTodoList('time', timeSortDesc)
    setTimeSortDesc(!timeSortDesc)
  }

  return (
    <div>
      <div className="desc-text">
        <p className="hover" onClick={handleNameSortClick}>
          Todos &#x25BE;
        </p>
        {!removable ? (
          <p className="hover" onClick={handleTimeSortClick}>
            Ska vara klart &#x25BE;
          </p>
        ) : (
          <p>Ta bort todo</p>
        )}
      </div>
      {todos.map((todo, i) => {
        const d = new Date()
        const timeNow = d.getHours().toString() + d.getMinutes().toString()
        const todoTime = todo.time.replace(':', '')

        const expired = Number(todoTime) < Number(timeNow) ? true : false

        return (
          <div className="todo-item" key={i}>
            <div className="left-content">
              <input
                type="checkbox"
                className="hover"
                onChange={() => doneWithTodo(i)}
              />
              <p className={todo.done ? 'done' : ''}>{todo.title}</p>
            </div>
            {!removable ? (
              <p className={`right-content ${expired ? 'red' : ''}`}>
                {!expired ? todo.time : 'tid ute'}
              </p>
            ) : (
              <p
                className={`right-content hover ${expired ? 'red' : ''}`}
                onClick={() => removeTodo(i)}
              >
                X
              </p>
            )}
          </div>
        )
      })}

      {todos.length > 0 && (
        <p
          className="delete-text hover"
          onClick={() => setRemovable(!removable)}
        >
          {!removable ? 'Radera todos' : 'Klar'}
        </p>
      )}
    </div>
  )
}
export default TodoList
