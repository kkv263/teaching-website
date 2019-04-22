'use strict'

module.exports = `
{
	allWordpressPage {
		edges {
			node {
				id
				path
				status
				template
			}
		}
	}
	allWordpressPost {
		edges {
			node {
				id
				path
				status
				template
				format
		}
	}
`