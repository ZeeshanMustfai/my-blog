import React from 'react'
import { Navbar, Button, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { navItems } from '../mock/navItems'
import styles from '@styles/navbar.module.scss'
interface NavItemProps {
	id: string
	path: string
	name: string
}

const renderNavItem = () => {
	return (
		<>
			{navItems.map(({ id, path, name }: NavItemProps) => (
				<Navbar.Link key={id} isActive={name === 'Blog'}>
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
				<Navbar.CollapseItem
					key={id}
					activeColor='primary'
					isActive={name === 'Blog'}
				>
					{name}
				</Navbar.CollapseItem>
			))}
		</>
	)
}
const Nav = () => {
	const router = useRouter()
	return (
		<Navbar variant='sticky' maxWidth={'md'}>
			<Navbar.Toggle showIn='sm' />
			<Navbar.Brand>
				<Text color='primary' size={'$2xl'}>
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
			<Navbar.Content>
				<Button
					animated
					rounded
					auto
					color={'primary'}
					className={styles.signIn}
					shadow
				>
					Login
				</Button>
				<Button animated rounded auto color={'secondary'} shadow bordered>
					SignUp
				</Button>
			</Navbar.Content>
			<Navbar.Collapse>{mobileNavItem()}</Navbar.Collapse>
		</Navbar>
	)
}

export default Nav
