import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { string, shape, number, bool } from 'prop-types'

const Card = ({ image, title, link, description }) => (
	<div className="shadow h-full w-full relative">
		<Image className="block" fluid={image} />
		<div className="p-4">
			<h2 className="text-2xl mb-4 leading-tight">{title}</h2>
			<p className="mb-4">{description}</p>
			<Link to={link}>Read more</Link>
		</div>
		<Link className="absolute inset-0 opacity-0" to={link}>
			Read more
		</Link>
	</div>
)

Card.propTypes = {
	title: string.isRequired,
	link: string.isRequired,
	description: string.isRequired,
	image: shape({
		src: string.isRequired,
		alt: string.isRequired,
		srcSet: string.isRequired,
		aspectRatio: number.isRequired,
		critial: bool
	}).isRequired
}

export default Card
