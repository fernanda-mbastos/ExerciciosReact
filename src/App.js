import './App.css';
import SayMyName from './components.js/SayMyName';
import Pessoa from './components.js/Pessoa';
import List from './components.js/List';
import Evento from './components.js/Evento';
import Form from './components.js/Form';

function App() {
  const name = "Fernanda";
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <p>Ola {name}</p>
      <SayMyName nome='Fernanda' />
      <SayMyName nome='Matheus' />
      <Pessoa 
        nome='Fernanda' 
        idade='34' 
        profissao='futura dev' 
        foto='https://via.placeholder.com/150' />
      <List />
      <Evento />
      <Form />
    </div>
  );
}

export default App;
