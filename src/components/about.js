import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import BackgroundImg from "gatsby-background-image"

const About = () => {
	const { wordpressPost } = useStaticQuery (
		graphql`
			query aboutQuery {
				wordpressPost(id:{eq:"a355a6b8-9f80-5f7f-b1d2-22855b904114"}) {
					title
					content
					featured_media {
						localFile {
							childImageSharp {
								fluid(maxWidth:1023){
									...GatsbyImageSharpFluid_tracedSVG
								}
							}
						}
					}
				}
			}
		`
	)
		
	return (
	<div className="about">
		<div className=" container">
			<div className="row">
				<div className="about__col--text col-md-6">
					<h1 className="about__name">Marissa Fujarte</h1>	
					<div className="about__content">
						<h2 className="about__headline">{wordpressPost.title}</h2>	
						<div dangerouslySetInnerHTML={{__html: wordpressPost.content}} className="about__text">
					</div>
					</div>
				</div>
				<BackgroundImg className="bgImg about__col--img col-md-6" fluid={wordpressPost.featured_media.localFile.childImageSharp.fluid}/>
			</div>
		</div>
	</div>
	)
}

export default About
