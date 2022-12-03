import React, {useContext, useState} from "react"
import { useNavigate} from "react-router-dom";
import { createOrdenCompra, getProducto, updateProducto } from "../assets/firebase"
import { CartContext } from "../context/CartContext"
import {toast } from 'react-toastify';

function Checkout() {

const[mail, setMail] = useState("");
    const[repeatMail, setRepeatMail] = useState("");

    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart,emptyCart, totalPrice} = useContext(CartContext);

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const values = Object.fromEntries(datForm)
        const aux = [...cart]
        aux.forEach(producto => {
            getProducto(producto.id)
            .then(prod => {
                prod.stock -= producto.quan
                updateProducto(producto.id, prod)
            })
        })
  
        createOrdenCompra(values, totalPrice(), new Date().toISOString().slice(0, 10)).then(order => {
            toast.success(`Tu orden ${order.id} ha sido creada con exito!`)
            emptyCart()
            e.target.reset()
            navigate("/")
          
        }).catch(error => {
            toast.error("Tu orden ha sido creada con exito!")
            console.error(error)
          })
        
        
        }
    
        return (
            <div className="container">
                <form onSubmit={consultarFormulario} id="checkout-form" ref={datosFormulario}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label" placeholder="Tu nombre">Nombre</label>
                        <input type="text" className="form-control" name="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" name="apellido" required/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={(e) => {setMail(e.target.value)}}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repite el Email</label>
                    <input type="email" className="form-control" name="email2" onChange={(e) => {setRepeatMail(e.target.value)}} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required/>
                </div>

                { mail === repeatMail ?
                        <button type="submit" className="btn btn-primary">Finalizar</button>
                    :
                    <div>
                        <button type="submit" className="btn btn-primary" disabled>Finalizar</button>
                    </div>
                }
                </form>
        </div>
          );
        }
export default Checkout