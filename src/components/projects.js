import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"

const Projects = () => {
	const { allWordpressPost } = useStaticQuery (
		graphql`
			query projectsQuery {
				allWordpressPost {
					edges {
						node {
							title
							categories {
								name
							}
							featured_media {
								localFile {
									childImageSharp {
										fluid(maxWidth:1023){
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`
	)

	let projectArray = [];

	(allWordpressPost.edges).forEach((post) => {
		post.node.categories.forEach(postCategories => {
			if (postCategories.name.toLowerCase() === "projects") {
				projectArray.push(post.node);
				return
			}
		})
	});
		
	return (
	<div className="projects">
		<div className="container">
			<div className="projects__wrapper">
				<div className="projects__item">
					<h2 className="projects__headline">UT Maker Projects</h2>
				</div>
				{projectArray.map((project) => (
					<Link key={project.title} to="/" title={project.title} className="projects__item">
						<Img className="projects__img" fluid={project.featured_media.localFile.childImageSharp.fluid}/>
						
					</Link>
				))}
			</div>
		</div> 

	</div>
	)
}

export default Projects
