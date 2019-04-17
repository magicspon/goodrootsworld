import React from 'react'
import { shape, object } from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '@/container/Layout'

function PageImage({ data }) {
	const { edges } = data.allInstaNode

	return (
		<Layout>
			<div className="flex items-center flex-col justify-center">
				<h1 className="mb-2">Image</h1>
				<div className="flex flex-wrap">
					{edges.map(
						({
							node: {
								id,
								localFile: {
									childImageSharp: { fluid }
								}
							}
						}) => (
							<div style={{ width: 400 }}>
								<Img key={id} fluid={fluid} />
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
