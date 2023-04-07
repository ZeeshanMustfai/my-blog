import React from 'react'
import { Badge, Card, Text } from '@nextui-org/react'
import { BlogMetaData } from '../types'

interface BlogPreviewProps {
	blogData: BlogMetaData
}
const BlogPreview = ({ blogData }: BlogPreviewProps) => {
	const { title, banner, date, description, subTitle, tags } = blogData
	return (
		<Card isPressable>
			<Card.Body css={{ p: 0, m: 0 }}>
				<Card.Image
					objectFit='cover'
					src={'https://nextui.org/images/fruit-6.jpeg'}
					width={'100%'}
					height={200}
				/>
			</Card.Body>
			<Card.Footer
				css={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}
			>
				<Text css={{ fontSize: '$2xl' }}>{title}</Text>
				<div>
					{tags.map((tag) => (
						<Badge variant='flat' color={'primary'} isSquared key={tag}>
							{tag}
						</Badge>
					))}
				</div>
			</Card.Footer>
		</Card>
	)
}

export default BlogPreview
