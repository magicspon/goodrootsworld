import React from 'react'
import { shape, object } from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/container/Layout'
import Card from '@/components/Card'

function PageArticles({ data }) {
	const { edges } = data.allMarkdownRemark
	const content = edges.map(
		({
			node: {
				id,
				frontmatter: { title, description, teaserImage },
				fields: { slug }
			}
		}) => ({
			id,
			title,
			description,
			image: {
				...teaserImage.childImageSharp.fluid,
				alt: title
			},
			link: slug
		})
	)

	return (
		<Layout>
			<div className="wrapper">
				<h1 className="mb-2">articles</h1>
				<div className="md:flex md:justify-start md:-ml-4">
					{content.map(({ id, ...props }) => (
						<div className="flex md:pl-4" key={id}>
							<Card {...props} />
						</div>
					))}
				</div>
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
					id
					fields {
						slug
					}
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
