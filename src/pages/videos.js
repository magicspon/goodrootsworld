import React from 'react'
import { shape, object } from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '@/container/Layout'

function PageVideos({ data }) {
	const { edges } = data.allMarkdownRemark

	return (
		<Layout>
			<div className="flex items-center flex-col justify-center">
				<h1 className="mb-2">videos</h1>
				<pre>{JSON.stringify(edges, null, 2)}</pre>
			</div>
		</Layout>
	)
}

PageVideos.propTypes = {
	data: shape({
		markdownRemark: shape({
			frontmatter: object
		})
	}).isRequired
}

export default PageVideos

export const pageQuery = graphql`
	query PageVideosQuery {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "video" } } }
		) {
			edges {
				node {
					frontmatter {
						title
						description
						teaserImage
						embed
					}
				}
			}
		}
	}
`
