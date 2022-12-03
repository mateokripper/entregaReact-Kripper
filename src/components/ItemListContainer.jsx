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
        const productsList = products.filter(prod => prod.marca === category)
          setProductos(productsList)
      })
    }else{
      getProductos().then(productsList=>{
          setProductos(productsList)
      })
    }
    
  },[category])
    
  return (
    <div className='row'>
    {productos.length === 0 	? <h1> Cargando ... </h1>
		: <ItemList productsList ={productos} ></ItemList>}
    </div>
  )
}

export default ItemListContainer
