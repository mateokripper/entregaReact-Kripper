import { useEffect , useState} from 'react'
import {getProductos} from '../assets/firebase.js'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const {category} = useParams()
    useEffect(()=>{
        if(category){
          getProductos().then(products=>{
            const productsList = products.filter(prod => prod.brand === category)
            const cardProductos = ItemList ({productsList})
              setProductos(cardProductos)
          })
        }else{
          getProductos().then(productsList=>{
            const cardProductos = ItemList ({productsList})
              setProductos(cardProductos)
          })
        }
        
        
    },[category])
    
  return (
    <div className='row'>
    {productos}
    </div>
  )
}

export default ItemListContainer
