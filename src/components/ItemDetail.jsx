import {useContext} from 'react'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({producto}) => {
  
  const {cart, isInCart, addItem} = useContext(CartContext)

  const onAdd = (contador) =>{
    addItem(producto, contador)
  }

  return (
    <div className="card cardProducto" style={{width: '18rem'}} key={producto.id}>
    <div className="card-body">
      <img src={producto.img} className= "card-img-top" alt= "..."/>
      <h4 className="card-title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{producto.name}</font></font></h4>
      <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{producto.description}</font></font></p>
      <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{producto.alcohol}% ABV</font></font></p>
      <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>${producto.price}</font></font></p>
      <ItemCount stock = {producto.stock} onAdd={onAdd}/>
      <button className='btn btn-dark'><Link to="/carrito">Finalizar compra</Link></button>
    </div>
  </div>
    
  )
}

export default ItemDetail