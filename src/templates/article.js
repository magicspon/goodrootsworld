import React from 'react'
import { shape, object } from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '@/container/Layout'

function TemplateArticle({ data }) {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<div className="flex items-center flex-col justify-center">
				<h1 className="mb-2">Article</h1>
				<pre>{JSON.stringify(frontmatter, null, 2)}</pre>
			</div>
		</Layout>
	)
}

TemplateArticle.propTypes = {
	data: shape({
		markdownRemark: shape({
			frontmatter: object
		})
	}).isRequired
}

export default TemplateArticle

export const pageQuery = graphql`
	query TemplateArticleQuery($path: String!) {
		markdownRemark(fields: { slug: { eq: $path } }) {
			frontmatter {
				title
			}
		}
	}
`
