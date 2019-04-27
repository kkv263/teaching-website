import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

// (function navOuterFunction(){
// 	function navFunction () {
// 		var nav = document.querySelector('.nav__menu')
// 		function navToggle () {
// 			nav.setAttribute('data-state', nav.getAttribute('data-state') === 'open' ? "" : 'open');
// 		}
// 		nav.addEventListener('click', navToggle , false);		
// 	}
// 	document.addEventListener('DOMContentLoaded', navFunction, false);
// })();

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
		<header class="container sticky">
			<div class="nav__wrapper">
				<h1 class="nav__headline">mf.</h1>
				<div class="nav__menu" data-open={isMenuOpen} > 
					<span class="nav__menu__span" onClick={this.handleClick}>Menu</span>
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
							<ul class="nav__list list-unstyled">
								{data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(( navItem ) => (
									<li key={navItem.object_id} class="nav__list__item"><a href={navItem.url}>{navItem.title}</a></li>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
