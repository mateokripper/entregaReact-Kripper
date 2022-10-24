import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
    </div>
  );
};

export default CartWidget;