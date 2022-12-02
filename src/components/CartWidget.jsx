import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const CartWidget = () => {
  const {getItemQty} = useContext(CartContext)
  return (
    <ul className="navbar-nav me-auto cart-widget">
        <li className="nav-item">
          <Link className="nav-link" to="/carrito">
            <p className='itemQty'>{getItemQty()}</p>
          <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
          </Link>
      </li>
    </ul>
  );
};

export default CartWidget;