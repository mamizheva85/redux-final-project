// import { useState } from "react";
// import ChangeQuantity from "../Cart/ChangeQuantity";
// import { useDispatch } from "react-redux";
// import { addItemToCart } from "../../redux/cartSlice";



// const Cloth = ({cloth}) => {
// 	const [quantity, setQuantity] = useState(1);
// 	const dispatch = useDispatch()
// 	return (<div className="main">
		
// 	<div className="container">
// 	<img className ="picture" src={`${cloth.img}.jpg`} alt="cloth-img"/>
// 		<div className="card-info">
// 			<h3>{cloth.name}</h3>
// 			<p>Price: ${cloth.price}</p>
// 		</div>
// 	<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

// 		<button onClick={() => dispatch(addItemToCart({cloth, quantity}))} className="btn">ADD TO CART</button>
// 	</div>
		
// 	</div>)
// }

// export default Cloth;

import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";

const Cloth = ({cloth}) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch()
	return(<div className="main">
		<div className="container">
 	<img className ="picture" src={`${cloth.img}.jpg`} alt="cloth-img"/>
		<div className="card-info">
 			<h3>{cloth.name}</h3>
			<p>Price: ${cloth.price}</p>
		</div>
		<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
	
		<button onClick={() => dispatch(addItemToCart({cloth, quantity}))} className="btn">ADD TO CART</button>	
	</div>
	</div>)
}



export default Cloth;