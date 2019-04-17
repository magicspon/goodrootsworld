import React from 'react'
import { string } from 'prop-types'
import Facebook from '@/icons/facebook.inline.svg'
import Twitter from '@/icons/twitter.inline.svg'
import Instagram from '@/icons/instagram.inline.svg'
import VisuallyHidden from '@/helpers/VisuallyHidden'

const Social = ({ linkedin, github }) => (
	<ul className="list-none flex items-center justify-center">
		<li className="mx-3">
			<a href={linkedin} className="text-black lg:text-black-40 block">
				<Facebook className="fill-current h-6" />
				<VisuallyHidden>Facebook</VisuallyHidden>
			</a>
		</li>
		<li className="mx-3">
			<a href={github} className="text-black lg:text-black-40 block">
				<Twitter className="fill-current h-6" />
				<VisuallyHidden>Twitter</VisuallyHidden>
			</a>
		</li>
		<li className="mx-3">
			<a href={github} className="text-black lg:text-black-40 block">
				<Instagram className="fill-current h-6" />
				<VisuallyHidden>Instagram</VisuallyHidden>
			</a>
		</li>
	</ul>
)

Social.defaultProps = {}
Social.propTypes = {
	linkedin: string.isRequired,
	github: string.isRequired
}

export default Social
