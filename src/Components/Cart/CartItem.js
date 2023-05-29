import dataClothes from "../../data/dataClothes";
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
	const clothes = dataClothes.find(item =>item.id ===cartItem.clothId);
	const dispatch = useDispatch();
	return (<div>
	<div className="cart-items">
		<div className="cart-name-item">
			<p className="item-name">{clothes.name}</p>
		</div>
		<div className="quantity-cart-items">
			<p>{cartItem.quantity} item(s)</p>
		</div>
		<div className="cart-price-item">
			<p>Price: ${clothes.price * cartItem.quantity}</p>
		</div>
		<div className="delete-item-box">
			<span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
				<AiOutlineCloseSquare className="delete-item"></AiOutlineCloseSquare>
			</span>
		</div>
		</div>
	</div>)
}

export default CartItem;