import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';

const Cart = () => {
	const cartItems = useSelector (getCartItems);
	const totalPrice = useSelector(getTotalPrice);
	return(<div className="cart">
		<p className="shopping-cart">Shopping Cart</p>
		<div className='cart-icon'>
			<AiOutlineShoppingCart></AiOutlineShoppingCart>
		</div>
	
		<div className='cart-item'>
		{cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
		</div>
		<div className='total-price'>
			<h3>TOTAL: ${totalPrice}</h3>
		</div>
	</div>)
}

export default Cart;
