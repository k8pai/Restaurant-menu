import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const categories=[...new Set(items.map(data => data.category))]

function App() {
	// make your changes here
	const [menuItems, setMenuItems] = useState(items);

	function filterItems(category) {
		if(category === 'all'){
			setMenuItems(items);
		}else{
			setMenuItems(items.filter(data => data.category == category));
		}
	}
	return <main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
}

export default App
