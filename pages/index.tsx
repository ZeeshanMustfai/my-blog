import BlogPreview from '@components/BlogPreview'
import { Container, Grid } from '@nextui-org/react'
import { getAllPosts } from '../lib/blog-api'
import { HomeProps } from '../types'

export const getStaticProps = async () => {
	const postList = await getAllPosts()
	return {
		props: {
			posts: postList,
		},
	}
}

export default function Home({ posts }: HomeProps) {
	return (
		<>
			<Container md>
				<Grid.Container gap={2}>
					{posts.map((item) => {
						return (
							<Grid key={item.slug} xs={12} sm={6} md={4}>
								<BlogPreview blogData={item.data} slug={item.slug} />
							</Grid>
						)
					})}
				</Grid.Container>
			</Container>
		</>
	)
}
