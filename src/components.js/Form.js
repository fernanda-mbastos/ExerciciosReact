import {useState} from "react";

function Form() {

  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(name)
    // eslint-disable-next-line no-template-curly-in-string
    console.log(`Cadastrou o usuario ${name} e senha ${password}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()


  return(
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>        
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Digite o seu nome"
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar"/>
        </div>
      </form>
    </div>

  )
}

export default Form