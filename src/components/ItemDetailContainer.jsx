import {useState, useEffect} from 'react'
import {useParams}from 'react-router-dom'
import { getProducto } from '../assets/firebase.js'
import ItemDetail from './ItemDetail'
export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id}= useParams()
    useEffect(()  => {
       getProducto(id).then(prod => {
            setProducto(prod)
            })
        }, [])
  return (
    <div>
        <div className='card mb-3 container itemDetail '>
        <ItemDetail producto={producto}/>
        </div>
    </div>
  )
}

export default ItemDetailContainer