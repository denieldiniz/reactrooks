import { useReducer, useState } from "react"

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state).toFixed(2)
  })

  // 2 - avançando no useReducer
  const initialTasks = [
    { id: 1, text: "fazer uma coisa" },
    { id: 2, text: "Dar um xeru em minha branquinha" },
    { id: 3, text: "Abraçar minhas cocadas" },
  ]

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        const newTask = {
          id: Math.random(),
          text: taskText,
        }

        setTaskText("")

        return [...state, newTask]
      }

      case "DELETE": {
        return state.filter((task) => task.id !== action.id)
      }

      default: {
        return state
      }
    }
  }

  const [taskText, setTaskText] = useState("")
  const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTask({ type: "ADD" })
  }

  const removeTask = (id) => {
    dispatchTask({ type: "DELETE", id: id })
  }

  return (
    <div>
      <hr />
      <h2>UseReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>gerar número</button>

      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />

        <input
          type="submit"
          value="Enviar tarefa"
        />
      </form>

      {tasks.map((task) => (
        <li
          key={task.id}
          onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
    </div>
  )
}
export default HookUseReducer
