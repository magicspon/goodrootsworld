/* eslint-disable react/require-default-props */

import React from 'react'
import { string, bool } from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'
import Social from '@/components/Social/Social'
import styles from './Nav.module.css'

const Item = ({ title, slug, last = false }) => (
	<li
		className={classNames('text-lg text-center', {
			'mb-6 md:mb-0 md:mx-4': !last,
			'md:ml-4': last
		})}
	>
		<Link to={slug} className="text-gray-700">
			{title}
		</Link>
	</li>
)

Item.propTypes = {
	title: string.isRequired,
	slug: string.isRequired,
	last: bool
}

const Nav = () => (
	<nav className={styles.nav}>
		<ul className="list-none md:flex md:mr-8 mb-8 md:mb-0">
			<Item title="About" slug="/about/" />
			<Item title="Video" slug="/videos/" />
			<Item title="Articles" slug="/articles/" />
			<Item title="Image" last slug="/images/" />
		</ul>

		<Social facebook="#0" twitter="#0" instagram="#0" />
	</nav>
)

export default Nav
