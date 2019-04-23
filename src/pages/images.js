import React from 'react'
import { shape, object } from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '@/container/Layout'

function PageImage({ data }) {
	const { edges } = data.allInstaNode

	return (
		<Layout>
			<div className="wrapper">
				<h1 className="mb-2">images</h1>
				<div className="md:flex md:flex-wrap md:justify-start md:-ml-4">
					{edges.map(
						({
							node: {
								id,
								caption,
								localFile: {
									childImageSharp: { fluid }
								}
							}
						}) => (
							<div key={id} className="md:pl-4 w-full md:w-1/2 lg:w-1/4 mb-4">
								<Img fluid={{ ...fluid, alt: caption }} />
							</div>
						)
					)}
				</div>
			</div>
		</Layout>
	)
}

PageImage.propTypes = {
	data: shape({
		markdownRemark: shape({
			frontmatter: object
		})
	}).isRequired
}

export default PageImage

export const pageQuery = graphql`
	query PageImageQuery {
		allInstaNode {
			edges {
				node {
					id
					preview
					caption
					localFile {
						childImageSharp {
							fluid {
								base64
								tracedSVG
								aspectRatio
								src
								srcSet
								srcWebp
								srcSetWebp
								originalName
								sizes
							}
						}
					}
					thumbnails {
						src
						config_width
						config_height
					}
					dimensions {
						height
						width
					}
				}
			}
		}
	}
`
