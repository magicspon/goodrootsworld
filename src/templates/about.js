import React from 'react'
import { shape, object } from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '@/container/Layout'

function TemplateAbout({ data }) {
	const { frontmatter, html } = data.markdownRemark

	return (
		<Layout>
			<div className="flex items-center flex-col justify-center">
				<h1 className="mb-2">about</h1>
				<pre>{JSON.stringify(frontmatter, null, 2)}</pre>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	)
}

TemplateAbout.propTypes = {
	data: shape({
		markdownRemark: shape({
			frontmatter: object
		})
	}).isRequired
}

export default TemplateAbout

export const pageQuery = graphql`
	query TemplateAboutQuery {
		markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
			frontmatter {
				title
				description
				embed
				teaserImage
			}
			html
		}
	}
`
