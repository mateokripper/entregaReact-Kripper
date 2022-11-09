import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <div className="card cardProducto" style={{width: '18rem'}} >
              <div className="card-body">
                <img src={`../img/${prod.img}`} className= "card-img-top" alt= "..."/>
                <h4 className="card-title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{prod.name}</font></font></h4>
                <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{prod.brand}</font></font></p>
                <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{prod.alcohol}% VOL</font></font></p>
                <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>${prod.price}</font></font></p>
                <button className='btn btn-dark'><Link className='nav-link' to={`producto/${prod.id}`}>Ver Producto</Link></button>
              </div>
    </div>
  )
}

export default Item