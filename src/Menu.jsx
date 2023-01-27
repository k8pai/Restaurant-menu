import React from 'react'

const Menu = (props) => {
	const { items } = props;
	return <div className="section-center">
			{items.map(data => 
				<article className="menu-item">
					<img src={data.img} alt={data.title} className="photo" />
					<div className="item-info">
						<header>
							<h4>{data.title}</h4>
							<h4 className="price">${data.price}</h4>
						</header>
						<p className="item-text">{data.desc}</p>
					</div>
				</article>
			)}
			
		</div>
}

export default Menu
