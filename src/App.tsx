import { useContext, useEffect, useState } from "react"
import { TodoContext } from "./store/todo"
import { TodoListForm } from "./components/TodoListForm"
import { TodoList } from "./components/TodoList"
import { todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function clearAllCheckedTodos() {
    setTodos((todos) => {
      return todos.filter(todo => !todo.checked)
    })
  }

  function createTodo(content: string) {
    setTodos((todos) => {
      return [
        ...todos,
        {
          content, 
          id: Math.random().toString(), 
          checked: false
        }
      ]
    })
  }
  
  function checkTodo(id: string) {
    setTodos((todos) => {

      return todos.map((todo) => {

        if (todo.id === id) {
          return {
            content: todo.content,
            id,
            checked: !todo.checked
          }
        }

        return todo
      })
    })
  }

  return (
    <TodoContext.Provider value={todos}>
      <div className="App">
        <TodoListForm createTodo={createTodo}/>

        <TodoList checkTodo={checkTodo}/>

        <button onClick={clearAllCheckedTodos}>Clear All Checked Todos</button>
      </div>
    </TodoContext.Provider>
  )
}

export default App
