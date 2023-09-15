import { useState } from "react"

const HookUseState = () => {
  const [nome, setNome] = useState("Deniel")

  const [idade, setIdade] = useState(41)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(idade)
  }

  return (
    <div>
      <hr />
      <h2>useState</h2>
      <p>Nome: {nome}</p>
      <button
        onClick={() => {
          nome === "Deniel" ? setNome("Isa") : setNome("Deniel")
        }}>
        mudar para {nome === "Deniel" ? "Isa" : "Deniel"}
      </button>
      <p>Digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <input
          type="submit"
          value="mudar idade"
        />
      </form>
      <p>Idade: {idade}</p>
    </div>
  )
}
export default HookUseState
