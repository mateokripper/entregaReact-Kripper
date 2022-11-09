import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div className="card cardProducto" style={{width: '18rem'}} key={producto.id}>
    <div className="card-body">
      <img src={`../img/${producto.img}`} className= "card-img-top" alt= "..."/>
      <h4 className="card-title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{producto.name}</font></font></h4>
      <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{producto.description}</font></font></p>
      <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{producto.alcohol}% ABV</font></font></p>
      <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>${producto.price}</font></font></p>
      <button className='btn btn-dark'>Agregar al carrito</button>
    </div>
  </div>
    
  )
}

export default ItemDetail