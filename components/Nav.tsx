import React, { useContext, useState } from 'react'
import { Navbar, Text, useTheme } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FaRegMoon, FaSun } from 'react-icons/fa'
import { navItems } from '../mock/navItems'
import styles from '@styles/navbar.module.scss'
import { MainContext } from '../pages/_app'
import { Theme, ThemeContextType } from '../types'
interface NavItemProps {
	id: string
	path: string
	name: string
}

const renderNavItem = () => {
	return (
		<>
			{navItems.map(({ id, path, name }: NavItemProps) => (
				<Navbar.Link key={id} color='primary'>
					{name}
				</Navbar.Link>
			))}
		</>
	)
}

const mobileNavItem = () => {
	return (
		<>
			{navItems.map(({ id, path, name }) => (
				<Navbar.CollapseItem key={id} activeColor='primary' color='secondary'>
					{name}
				</Navbar.CollapseItem>
			))}
		</>
	)
}

const Nav = () => {
	const router = useRouter()
	const { theme, changeTheme } = useContext<ThemeContextType>(MainContext)

	return (
		<Navbar variant='sticky' maxWidth={'md'} disableBlur={true}>
			<Navbar.Toggle showIn='sm' />
			<Navbar.Brand className={styles.brand} onClick={() => router.push('/')}>
				<Text color='primary' size={'$2xl'} css={{ fontWeight: '900' }}>
					Mustfai
				</Text>
			</Navbar.Brand>
			<Navbar.Content
				hideIn={'sm'}
				enableCursorHighlight
				activeColor={'primary'}
				variant='underline'
			>
				{renderNavItem()}
			</Navbar.Content>
			<Navbar.Content className='icon'>
				{theme === 'light' ? (
					<FaRegMoon onClick={() => changeTheme('dark')} />
				) : (
					<FaSun onClick={() => changeTheme('light')} />
				)}
			</Navbar.Content>
			<Navbar.Collapse>{mobileNavItem()}</Navbar.Collapse>
		</Navbar>
	)
}

export default Nav
