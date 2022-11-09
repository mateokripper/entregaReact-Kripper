import { useEffect , useState} from 'react'
import {consultarBDD} from '../assets/funciones.js'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const {category} = useParams()
    useEffect(()=>{
        if(category){
          consultarBDD('../json/productos.json').then(products=>{
            const productsList = products.filter(prod => prod.idCat === parseInt(category))
            const cardProductos = ItemList ({productsList})
              setProductos(cardProductos)
          })
        }else{
          consultarBDD('./json/productos.json').then(productsList=>{
            const cardProductos = ItemList ({productsList})
              setProductos(cardProductos)
          })
        }
        
        
    },[])
    
  return (
    <div className='row'>
    {productos}
    </div>
  )
}

export default ItemListContainer
