import React from "react"

function Checkout() {
  const datoFormulario = React.useRef()
    const consultarFormulario = (e)=>{
        e.preventDefault()
        console.log(datoFormulario)
        const datForm = new FormData(datoFormulario.current)
        const valores = Object.fromEntries(datForm)
        console.log(valores)
        e.target.reset()
    }
  return (
  <div className="container">
    <form onSubmit={consultarFormulario} ref={datoFormulario}>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label mt-4">Nombre y Apellido</label>
    <input type="text" className="form-control" name="nombre"  />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label mt-4">Email</label>
    <input type="email" className="form-control" name="email"  />
  </div>
  <div className="mb-3">
    <label htmlFor="dni" className="form-label mt-4">DNI</label>
    <input type="number" className="form-control" name="dni"  />   
  </div>
  <div className="mb-3">
    <label htmlFor="numeroTelefonico" className="form-label mt-4">Numero Telefonico</label>
    <input type="number" className="form-control" name="numeroTelefonico"  />
  </div>
  <div className="mb-3">
    <label htmlFor="direccion" className="form-label mt-4">Direccion</label>
    <input type="number" className="form-control" name="direccion"  />
  </div>
  <button type="submit" className="btn btn-dark">Finalizar compra</button>
</form>

    </div>
  )
}

export default Checkout