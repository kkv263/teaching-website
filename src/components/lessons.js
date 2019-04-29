import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"

const Lessons = () => {
	const { allWordpressPost } = useStaticQuery (
		graphql`
			query lessonsQuery{
				allWordpressPost {
					edges {
						node {
							title
							categories {
								name
							}
						}
					}
				}
			}
		`
	)

	// let projectArray = [];

	// (allWordpressPost.edges).forEach((post) => {
	// 	post.node.categories.forEach(postCategories => {
	// 		if (postCategories.name.toLowerCase() === "projects") {
	// 			projectArray.push(post.node);
	// 			return
	// 		}
	// 	})
	// });
		

	return (
	<div className="lessons">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div class="accordion" data-accordion>
						<div class="accordion__globalControls">
							<button class="accordion__toggle button--cleanest" data-toggle-expandall>Expand All</button>
							/
							<button class="accordion__toggle button--cleanest" data-toggle-collapseall>Collapse All</button> 
						</div>
						<details class="accordion__tab">
							<summary class="accordion__header">
								<h4 class="accordion__headline">How do I join?</h4>
							</summary>
							<div class="accordion__tab-content">
								<h3>Accordion rich text header</h3>
								Lorem ipsum <a href="#">dolor</a>, sit amet consectetur adipisicing elit. Quasi, expedita. Deleniti temporibus ut fuga veniam illo magnam nihil aut deserunt, iure necessitatibus architecto totam provident voluptatibus eum sapiente voluptatum dolore.
							</div>
						</details>
					</div>
				</div>
				<div className="col-md-6">
				<h2>Teaching Philosophy</h2>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis tempore sint dolores perspiciatis porro earum, nihil totam ullam, cum accusantium aperiam dignissimos, modi expedita exercitationem illo. Dolor, doloribus vitae. Praesentium?
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dicta dolore quidem eveniet, sunt quaerat autem incidunt, mollitia commodi voluptates reiciendis ea atque molestiae alias optio ex? Dolore, delectus rerum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquam quaerat deserunt voluptate ratione et dolor aperiam est, voluptatibus ipsa corrupti rem reiciendis illum sint. Ducimus perferendis repellat praesentium ipsam?
				</div>
			</div>
		
		</div>
	</div>
	)
}

export default Lessons
