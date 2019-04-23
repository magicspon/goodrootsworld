import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card.js'

storiesOf('Card', module).add('default', () => (
	<Card
		title="Story about leaves"
		image={{
			src: 'img/heic0503a.jpg',
			srcSet: '',
			alt: '',
			aspectRatio: 1.6,
			critical: true,
			sizes: ''
		}}
		link="#0"
	/>
))
