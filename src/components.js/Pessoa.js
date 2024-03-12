import styles from './Pessoa.module.css'

function Pessoa({nome, idade, profissao, foto}) {
  return (
    <div className={styles.pessoaContainer}>
      <img src={foto} alt={nome}/>
      <h2 className={styles.pessoaContent}>Nome: {nome}</h2>
      <p className={styles.pessoaContent}>Idade: {idade}</p>
      <p className={styles.pessoaContent}>Profissao: {profissao}</p>
    </div>
  )
}

export default Pessoa