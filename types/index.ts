export interface BlogMetaData {
	title: string
	subTitle?: string
	description: string
	date: string
	banner: string
	tags: string[]
	content?:string
	slug?: string
}


interface BlogDetailProps {
	content: string
	slug: string
	data: BlogMetaData
}
export interface HomeProps {
	posts: BlogDetailProps[]
	children: React.ReactNode
}

export type Theme = 'light' | 'dark'
export type ThemeContextType = {
	theme: Theme
	changeTheme: (theme: Theme) => void
}