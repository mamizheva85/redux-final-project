import Filter from "./Filter";

const AllCategories = () => {
	return (<div className="categories">
		<div>
		{['Women', 'Men', 'Kids', 'Activewear', 'All']
		.map(category => <Filter category={category}/>)}
		</div>
		
	</div>)
}


export default AllCategories;