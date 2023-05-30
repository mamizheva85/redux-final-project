import Filter from "./Filter";

const AllCategories = () => {
	return (<div className="categories">
		<div>
		{['Women', 'Men', 'Kids', 'Activewear', 'All']
		.map((category, id) => <Filter category={category} key={id}/>)}
		</div>
		
	</div>)
}


export default AllCategories;
