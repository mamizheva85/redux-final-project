import { useSelector } from "react-redux";
import dataClothes from "../../data/dataClothes";
import Cloth from "./Cloth";
import { getSelectedCategory } from "../../redux/clothesSlice";

const Clothes = () => {
	const selectedCategory = useSelector(getSelectedCategory)
	return (<div className="clothes">
	{dataClothes
	.filter(cloth => {
		if (selectedCategory === 'All') return true;
		return selectedCategory === cloth.category;
	})
	.map(cloth => <Cloth cloth={cloth}/>)}

	</div>)
}


export default Clothes;