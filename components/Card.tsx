import React from 'react'
import { Badge, Card as CardUI, Grid, Row, Text } from '@nextui-org/react'
const Card = () => {
	return (
		<CardUI isPressable>
			<CardUI.Body css={{ p: 0, m: 0 }}>
				<CardUI.Image
					objectFit='cover'
					src='https://nextui.org/images/fruit-6.jpeg'
					width={'100%'}
					height={250}
				/>
			</CardUI.Body>
			<CardUI.Footer
				css={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}
			>
				<Text css={{ fontSize: '$2xl' }}>React Orange</Text>
				<div>
					<Badge variant='flat' color={'primary'} isSquared>
						react js
					</Badge>
					<Badge variant='flat' color={'secondary'} isSquared>
						next js
					</Badge>
					<Badge variant='flat' color={'warning'} isSquared>
						html
					</Badge>
					<Badge variant='flat' color={'error'} isSquared>
						scss
					</Badge>
				</div>
			</CardUI.Footer>
		</CardUI>
	)
}

export default Card
