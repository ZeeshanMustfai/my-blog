import './../styles/globals.scss'
import '../styles/components/prism-dracula.scss'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '../theme/lightTheme'
import Layout from '../layout'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider theme={theme}>
			<Layout title='Blog'>
				<Component {...pageProps} />
			</Layout>
		</NextUIProvider>
	)
}
