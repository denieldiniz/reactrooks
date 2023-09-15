import { useReducer } from "react"

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state).toFixed(2)
  })

  return (
    <div>
      <hr />
      <h2>UseReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>gerar</button>
    </div>
  )
}
export default HookUseReducer
