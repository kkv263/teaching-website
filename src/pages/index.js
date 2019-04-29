import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import About from "../components/about"
import Lessons from "../components/lessons"
import Projects from "../components/projects"
import SEO from "../components/seo"
import "../styles/components/header.scss"
import "../styles/components/about.scss"
import "../styles/components/projects.scss"
import "../styles/components/lessons.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<About/>
		<Lessons/>
		<Projects/>

    {/* <Image /> */}
  </Layout>
)

export default IndexPage
