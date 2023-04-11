import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme, lightTheme } from '../theme/theme'
import Layout from '../layout'
import './../styles/globals.scss'
import '../styles/components/prism-dracula.scss'
import { createContext, useState } from 'react'
import { Theme, ThemeContextType } from '../types'

export const MainContext = createContext<ThemeContextType | undefined>(
	undefined
)

export default function App({ Component, pageProps }: AppProps) {
	const [mode, setMode] = useState<Theme>('light')
	return (
		<MainContext.Provider value={{ theme: mode, changeTheme: setMode }}>
			<NextUIProvider theme={mode === 'light' ? lightTheme : darkTheme}>
				<Layout title='Blog'>
					<Component {...pageProps} />
				</Layout>
			</NextUIProvider>
		</MainContext.Provider>
	)
}
