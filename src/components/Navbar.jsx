import {Link} from 'react-router-dom'
import CartWidget from "./CartWidget"
import React from 'react'
const Navbar = React.memo ( () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="nav-link" to="/">
      <a className="navbar-brand" href="#">NAV-BEER</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <button className="btn btn-dark">Home</button>
            </Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to={`/category/Affligem`}>
              <button className="btn btn-light">Affligem</button>
          </Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to={`/category/Trappistes`}>
              <button className="btn btn-light">Trappistes</button>
          </Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to={`/category/St Bernardus`}>
              <button className="btn btn-light">St Bernardus</button>
          </Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to={`/category/Chimay`}>
              <button className="btn btn-light">Chimay</button>
          </Link>
          </li>
     
        </ul>
      </div>
      <CartWidget/>
    </div>
  </nav>
  )
})

export default Navbar