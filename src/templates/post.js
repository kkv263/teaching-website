import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        return (
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
								<div dangerouslySetInnerHTML={{ __html: post.categories[0].name}} />
            </div>
        )
    }
}

export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
						content
						categories {
							name
						}
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`