import React from 'react'
import { shape, object } from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '@/container/Layout'

function PageArticles({ data }) {
	const { edges } = data.allMarkdownRemark

	return (
		<Layout>
			<div className="flex items-center flex-col justify-center">
				<h1 className="mb-2">articles</h1>
				<pre>{JSON.stringify(edges, null, 2)}</pre>
			</div>
		</Layout>
	)
}

PageArticles.propTypes = {
	data: shape({
		markdownRemark: shape({
			frontmatter: object
		})
	}).isRequired
}

export default PageArticles

export const pageQuery = graphql`
	query PageArticlesQuery {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "article" } } }
		) {
			edges {
				node {
					frontmatter {
						title
						date
						description
						teaserImage {
							childImageSharp {
								fluid {
									base64
									tracedSVG
									aspectRatio
									src
									srcSet
									srcWebp
									srcSetWebp
									sizes
								}
							}
						}
						embed
					}
					html
				}
			}
		}
	}
`
