import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import About from "../components/about"
import Projects from "../components/projects"
import SEO from "../components/seo"
import "../styles/components/header.scss"
import "../styles/components/about.scss"
import "../styles/components/projects.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<About/>
		<Projects/>

    {/* <Image /> */}
  </Layout>
)

export default IndexPage
