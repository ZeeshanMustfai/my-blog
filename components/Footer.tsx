import React from 'react'
import styles from '@styles/footer.module.scss'
import SocialLinks from './SocialLinks'
import { Container, Text } from '@nextui-org/react'

const Footer = () => {
	return (
		<div className={styles.mainFooter}>
			<Container md className={styles.footer}>
				<Text css={{ fontWeight: '700' }} color='primary'>
					@ 2023 {process.env.NEXT_PUBLIC_OWNER_NAME}
				</Text>
				<div>
					<SocialLinks />
				</div>
			</Container>
		</div>
	)
}

export default Footer
