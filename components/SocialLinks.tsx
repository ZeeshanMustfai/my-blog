import {
	FaLinkedin,
	FaGithubSquare,
	FaMedium,
	FaStackOverflow,
	FaYoutube,
} from 'react-icons/fa'
import styles from '@styles/footer.module.scss'

const SocialLinks = () => {
	const ICON_SIZE = 24
	return (
		<div>
			<FaLinkedin
				size={ICON_SIZE}
				onClick={() =>
					window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, '_blank')
				}
				className={styles.socialIcon}
			/>
			<FaGithubSquare
				size={ICON_SIZE}
				onClick={() =>
					window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, '_blank')
				}
				className={styles.socialIcon}
			/>
			<FaMedium
				size={ICON_SIZE}
				onClick={() =>
					window.open(process.env.NEXT_PUBLIC_MEDIUM_PROFILE_URL, '_blank')
				}
				className={styles.socialIcon}
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
			/>
		</div>
	)
}

export default SocialLinks
