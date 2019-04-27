import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import PropTypes from "prop-types"
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
	<div class="about">
		<div class=" container">
			<div class="row">
				<div class="about__col--text col-md-6">
					<h1 class="about__name">Marissa Fujarte</h1>	
					<div class="about__content">
						<h2 class="about__headline">{wordpressPost.title}</h2>	
						<div dangerouslySetInnerHTML={{__html: wordpressPost.content}} class="about__text">
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
