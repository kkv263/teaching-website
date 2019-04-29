import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

class Header extends Component  {
	constructor(props) {
		super(props);
		this.state = {isMenuOpen: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isMenuOpen: !prevState.isMenuOpen
		}));
	}

	render (){
		const { isMenuOpen } = this.state

		return (
		<>
		<header className="container sticky">
			<div className="nav__wrapper">
				<Link to="">
					<h1 className="nav__headline">mf.</h1>
				</Link>
				<div className="nav__menu" data-open={isMenuOpen} > 
					<span className="nav__menu__span" onClick={this.handleClick}>Menu</span>
					<StaticQuery
						query={	graphql`
							query navQuery {
								allWordpressWpApiMenusMenusItems {
									edges {
										node {
											items {
												title
												url
												object_id
											}
										}
									}
								}
							}
						`}
						render={data => (
							<ul className="nav__list list-unstyled">
								{data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(( navItem ) => (
									<li key={navItem.object_id} className="nav__list__item"><a href={navItem.url}>{navItem.title}</a></li>
								))}
							</ul>
						)}
  				/>
				</div>
			</div>
		</header>
		</>
		)
	}
}

export default Header
