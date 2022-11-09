import Item from "./Item"

const ItemList = ({productsList}) => {
  return (
    <>
    {productsList.map(producto => <Item key={producto.id} prod={producto}/>)}
    </>
  )
}

export default ItemList