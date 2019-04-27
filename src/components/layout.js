/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/_style.scss"

const Layout = ({children}) => {
  const { site } = useStaticQuery (
		graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
			}
		`
	)
	return (<div>
		<Header siteTitle={site.siteMetadata.title} />
		<main>{children}</main>
	</div>)
	// 	<div>
	// 	{/* <Header siteTitle={data.site.siteMetadata.title} /> */}
	// 	<main>{children}</main>
	// 	<footer>
	// 		{/* © {new Date().getFullYear()}, Built with
	// 		{` `}
	// 		<a href="https://www.gatsbyjs.org">Gatsby</a> */}
	// 	</footer>	
	// )
	// </div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

