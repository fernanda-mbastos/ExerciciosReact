import Item from './Item'

function List() {
  return(
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca={'Renault'} lancamento={1980}/>
        <Item marca={'Citroen'} lancamento={1995}/>
      </ul>
    </>
  )
}

export default List