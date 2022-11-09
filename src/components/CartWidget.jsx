import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
const CartWidget = () => {
  
  return (
    <ul className="navbar-nav me-auto cart-widget">
        <li className="nav-item">
          <Link className="nav-link" to="/carrito">
          <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
          </Link>
      </li>
    </ul>
  );
};

export default CartWidget;