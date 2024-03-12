import Button from "./Button"

function Evento() {

  function meuEvento() {
    console.log('ativado')
  }

  function meuEvento2() {
      console.log(`Primeiro evento ativado`)
  }
// reaproveitamento do componente Button
  function meuEvento3() {
    console.log(`Segundo evento ativado`)
}
  return (
    <div>
      <p>Clique para disparar um evento!</p>
      <Button event={meuEvento2} text='Primeiro evento'/>
      <Button event={meuEvento3} text='Segundo evento'/>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  )
}

export default Evento