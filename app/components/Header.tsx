'use client';
import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Link,
	Button,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		'Projects',
		'Technologies',
		'Contact',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
		'Help & Feedback',
		'Log Out',
	];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:block md:hidden'
				/>
				<NavbarBrand>
					{/* <AcmeLogo /> */}
					<p className='font-bold text-inherit'>BMSF</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden md:flex gap-4' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Projects
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href='#' aria-current='page'>
						Technologies
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='lg:flex'>
					<ThemeSwitcher />
				</NavbarItem>
				{/* <NavbarItem>
					<Link color='foreground' href='#'>
						<AiOutlineGithub className='w-8 h-8' />
					</Link>

					<Link color='foreground' href='#'>
						<AiOutlineLinkedin className='w-8 h-8' />
					</Link>
				</NavbarItem> */}
				<NavbarItem>
					<Button as={Link} color='primary' href='#' variant='shadow'>
						Contact
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? 'primary'
									: index === menuItems.length - 1
									? 'danger'
									: 'foreground'
							}
							className='w-full'
							href='#'
							size='lg'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
