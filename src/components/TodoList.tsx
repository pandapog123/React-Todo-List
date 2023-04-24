import { useContext } from "react"
import { TodoContext } from "../store/todo"

export function TodoList({ checkTodo }: { checkTodo: (id: string) => void }) {
  let todos = useContext(TodoContext)

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              id={todo.id} 
              checked={todo.checked} 
              onChange={() => checkTodo(todo.id)}/>
            <label htmlFor={todo.id}>
              {todo.content}
            </label>
          </li>
        )
      })}

    </ul>
  )
}