import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"

const Lessons = () => {
	const { wordpressWpApiMenusMenusItems } = useStaticQuery (
		graphql`
			query lessonsQuery{
				wordpressWpApiMenusMenusItems (name:{eq:"Lesson Plan"}) {
					items {
						title
						object_id
					}
				}
			}
		`
	)

	return (
	<div id="about" className="lessons">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div class="accordion" data-accordion>
					{wordpressWpApiMenusMenusItems.items.map((item) => (
						<details key={item.object_id} class="accordion__tab">
							<summary class="accordion__header">
								<h4 class="accordion__headline">{item.title}</h4>
							</summary>
							<div class="accordion__tab-content">
								<h3>Accordion rich text header</h3>
								Lorem ipsum <a href="#">dolor</a>, sit amet consectetur adipisicing elit. Quasi, expedita. Deleniti temporibus ut fuga veniam illo magnam nihil aut deserunt, iure necessitatibus architecto totam provident voluptatibus eum sapiente voluptatum dolore.
							</div>
						</details>
					))}
					</div>
				</div>
				<div className="col-md-6">
				<h2>Teaching Philosophy</h2>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis tempore sint dolores perspiciatis porro earum, nihil totam ullam, cum accusantium aperiam dignissimos, modi expedita exercitationem illo. Dolor, doloribus vitae. Praesentium?
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dicta dolore quidem eveniet, sunt quaerat autem incidunt, mollitia commodi voluptates reiciendis ea atque molestiae alias optio ex? Dolore, delectus rerum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquam quaerat deserunt voluptate ratione et dolor aperiam est, voluptatibus ipsa corrupti rem reiciendis illum sint. Ducimus perferendis repellat praesentium ipsam?
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sunt assumenda autem fugit voluptatibus asperiores iure veritatis, dolorem molestias, quibusdam quod enim sapiente sint dolores sed? Eaque esse consequuntur alias.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sunt, maxime unde dolore neque quae deserunt illo nostrum beatae iure, numquam excepturi delectus possimus? Sed porro ad non. Nihil, in.
				</div>
			</div>
		
		</div>
	</div>
	)
}

export default Lessons
