import {
	GetStaticPathsResult,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from 'next'
import React from 'react'
import Markdown from 'markdown-to-jsx'
import { getPostBySlug, getPostSlug } from '../lib/blog-api'
import { BlogMetaData } from '../types'
import CodeBlock from '@components/CodeBlock'
import { Container, Grid } from '@nextui-org/react'

export const getStaticPaths = (): GetStaticPathsResult => {
	const posts = getPostSlug()
	const paths = posts.map((postSlug: string) => {
		return {
			params: {
				slug: postSlug.replace('.md', ''),
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = ({
	params,
}: GetStaticPropsContext): GetStaticPropsResult<BlogMetaData> => {
	const slug = params?.slug ?? ''
	const postDetails = getPostBySlug(slug.toString())
	return {
		props: {
			title: postDetails.data.title,
			date: postDetails.data.date,
			description: postDetails.data.description,
			slug: postDetails.slug,
			content: postDetails.content,
			tags: postDetails.data.tags,
			banner: postDetails.data.banner,
		},
	}
}
const BlogDetail = ({ content }: BlogMetaData) => {
	return (
		<Container md>
			<Grid.Container gap={2} css={{ my: 10 }}>
				<Grid xs={12} sm={9}>
					<Markdown
						options={{
							wrapper: 'article',
							forceBlock: false,
							overrides: {
								pre: {
									component: CodeBlock,
								},
							},
						}}
					>
						{content as string}
					</Markdown>
				</Grid>
				<Grid xs={12} sm={3}>
					My Profile here
				</Grid>
			</Grid.Container>
		</Container>
	)
}

export default BlogDetail
