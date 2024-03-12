import { useState } from "react"

function Condicional() {

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
    console.log('teste')
  }

  function limparEmail(e) {
    setUserEmail('')
  }

  return(
    <div>
      <h2>Cadastre o seu email:</h2>
      <form> 
        <input 
          type='email' 
          placeholder="Digite o seu e-mail" 
          onChange={(e)=>setEmail(e.target.value)} 
        />
      </form>
      <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
      {userEmail && (
        <div>
          <p>O email é {userEmail}</p>
          <button onClick={limparEmail}>Limpar e-mail</button>
        </div>
      )}
    </div>
  )

}

export default Condicional