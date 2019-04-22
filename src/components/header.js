import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

export const Header = () => (
	<StaticQuery
    query={graphql`
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
			<header class="container">
				<div class="nav__wrapper">
					<ul class="nav__list list-unstyled">
						{data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(( navItem ) => (
							<li key={navItem.object_id} class="nav__list__item"><a href={navItem.url}>{navItem.title}</a></li>
						))}
					</ul>
				</div>
			</header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
