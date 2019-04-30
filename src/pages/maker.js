import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import "../styles/components/projects.scss"

const MakerPage = () => (
  <Layout>
    <SEO title="UT Maker" />
		<Projects/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MakerPage