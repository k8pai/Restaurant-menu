import React from 'react'

const Categories = (props) => {

	const { filterItems, categories } = props;
	return <div className="btn-container">
			<button onClick={() => filterItems('all')} className="filter-btn">All</button>
			{categories.map(data => 
				<button onClick={() => filterItems(data)} className="filter-btn">{data}</button>
			)}
		</div>
}

export default Categories
