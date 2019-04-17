import React from 'react'
import { shape, object } from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '@/container/Layout'

function PageHome({ data }) {
	const { edges } = data.allMarkdownRemark

	return (
		<Layout>
			<div className="flex items-center flex-col justify-center">
				<h1 className="mb-2">home</h1>
				<pre>{JSON.stringify(edges, null, 2)}</pre>
			</div>
		</Layout>
	)
}

PageHome.propTypes = {
	data: shape({
		markdownRemark: shape({
			frontmatter: object
		})
	}).isRequired
}

export default PageHome

export const pageQuery = graphql`
	query PageHomeQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						templateKey
						date
						description
						teaserImage
						embed
					}
				}
			}
		}
	}
`
