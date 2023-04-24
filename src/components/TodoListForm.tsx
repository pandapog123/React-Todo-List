import { useContext, useState } from "react"
import { TodoContext } from "../store/todo"

export function TodoListForm({ createTodo }: {createTodo: (content: string) => void}) {
  const [inputValue, setInput] = useState("");


  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (inputValue == "") return

    createTodo(inputValue)

    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setInput(event.target.value)} value={inputValue} />
      
      <button type="submit">Click</button>
    </form>
  )
}