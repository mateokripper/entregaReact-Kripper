import {useState} from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)
    
    const modificarContador  = (operacion) =>{
        if(operacion === "+"){
            if(contador< stock)
            setContador(contador + 1) //contador++  contador = contador +1 MAL
        }else{
            if (contador > 1)
            setContador(contador - 1)
        }
    }

    const agregarAlCarrito =()=>{
        onAdd(contador)
    }
    return (
    <>
    
    
    <button  onClick={()=>modificarContador("-")} className='btn btn-dark detailButton'>-</button>
    {contador}
    <button onClick={()=>modificarContador("+")} className='btn btn-dark detailButton'>+</button>
    <button className='btn btn-dark detailButton' onClick={agregarAlCarrito}><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /></button>
    </>
  )
}

export default ItemCount