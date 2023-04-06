import './../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '../theme/lightTheme'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider theme={theme}>
			<Component {...pageProps} />
		</NextUIProvider>
	)
}
