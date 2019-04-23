import React from 'react'
import { string } from 'prop-types'
import Facebook from '@/icons/facebook.inline.svg'
import Twitter from '@/icons/twitter.inline.svg'
import Instagram from '@/icons/instagram.inline.svg'
import VisuallyHidden from '@/helpers/VisuallyHidden'

const Social = ({ facebook, twitter, instagram }) => (
	<ul className="list-none flex items-center justify-center">
		<li className="mx-3">
			<a href={facebook} className="text-black md:text-gray-400 block">
				<VisuallyHidden>Facebook</VisuallyHidden>
				<Facebook className="fill-current h-6" />
			</a>
		</li>
		<li className="mx-3">
			<a href={twitter} className="text-black md:text-gray-400 block">
				<VisuallyHidden>Twitter</VisuallyHidden>
				<Twitter className="fill-current h-6" />
			</a>
		</li>
		<li className="mx-3">
			<a href={instagram} className="text-black md:text-gray-400 block">
				<VisuallyHidden>Instagram</VisuallyHidden>
				<Instagram className="fill-current h-6" />
			</a>
		</li>
	</ul>
)

Social.defaultProps = {}
Social.propTypes = {
	facebook: string.isRequired,
	twitter: string.isRequired,
	instagram: string.isRequired
}

export default Social
