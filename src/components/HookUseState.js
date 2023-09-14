import { useState } from "react"

const HookUseState = () => {
  const [nome, setNome] = useState("Deniel")

  return (
    <div>
      <hr />
      HookUseState
      <p>Nome: {nome}</p>
      <button
        onClick={() => {
          nome === "Deniel" ? setNome("Isa") : setNome("Deniel")
        }}>
        mudar para {nome === "Deniel" ? "Isa" : "Deniel"}
      </button>
    </div>
  )
}
export default HookUseState
