import {
	FaLinkedin,
	FaGithubSquare,
	FaMedium,
	FaStackOverflow,
	FaYoutube,
} from 'react-icons/fa'
import styles from '@styles/footer.module.scss'
import { useTheme } from '@nextui-org/react'
const ICON_SIZE = 24
const SocialLinks = () => {
	const icon = useTheme()
	return (
		<div>
			<FaLinkedin
				size={ICON_SIZE}
				onClick={() =>
					window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, '_blank')
				}
				className={styles.socialIcon}
				color={icon.theme?.colors?.primary.toString()}
			/>
			<FaGithubSquare
				size={ICON_SIZE}
				onClick={() =>
					window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, '_blank')
				}
				className={styles.socialIcon}
				color={icon.theme?.colors?.primary.toString()}
			/>
			<FaMedium
				size={ICON_SIZE}
				onClick={() =>
					window.open(process.env.NEXT_PUBLIC_MEDIUM_PROFILE_URL, '_blank')
				}
				className={styles.socialIcon}
				color={icon.theme?.colors?.primary.toString()}
			/>
			<FaStackOverflow
				size={ICON_SIZE}
				onClick={() =>
					window.open(
						process.env.NEXT_PUBLIC_STACKOVERFLOW_PROFILE_URL,
						'_blank'
					)
				}
				className={styles.socialIcon}
				color={icon.theme?.colors?.primary.toString()}
			/>
		</div>
	)
}

export default SocialLinks
