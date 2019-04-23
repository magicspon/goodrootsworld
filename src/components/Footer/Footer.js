import React from 'react'
import Social from '@/components/Social/Social'

const year = new Date().getFullYear()
const Footer = () => (
	<footer className="bg-dark p-6 md:flex justify-between items-center flex-row-reverse w-full">
		<div className="mb-4 md:mb-0">
			<Social facebook="#0" twitter="#0" instagram="#0" />
		</div>

		<p className="m-0 text-white-40 text-sm text-center md:text-left">
			&copy; {year} - Good Roots World
		</p>
	</footer>
)

export default Footer
