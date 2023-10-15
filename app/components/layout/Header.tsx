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
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Logo from '@/public/logo-no-background.png';
import LogoLight from '@/public/logo-no-background-light.png';
import Image from 'next/image';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const pathname = usePathname();

	const { theme, setTheme } = useTheme();

	const menuItems = ['Home', 'About', 'Projects', 'Technologies'];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:block md:hidden'
				/>
				<NavbarBrand>
					<Link className='h-12 w-12 relative' href='/'>
						<Image
							src={theme === 'light' ? LogoLight : Logo}
							alt='logo'
							fill
							className='object-contain'
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden md:flex gap-4' justify='center'>
				<NavbarItem>
					<Link
						href='/about'
						color={pathname === '/about' ? 'primary' : 'foreground'}
						aria-current={pathname === '/projects' ? 'page' : undefined}
					>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						href='/projects'
						color={pathname === '/projects' ? 'primary' : 'foreground'}
						aria-current={pathname === '/projects' ? 'page' : undefined}
					>
						Projects
					</Link>
				</NavbarItem>
				<NavbarItem isActive={pathname === '/technologies'}>
					<Link
						href='/technologies'
						color={pathname === '/technologies' ? 'primary' : 'foreground'}
						aria-current={pathname === '/technologies' ? 'page' : undefined}
					>
						Technologies
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem className='lg:flex'>
					<ThemeSwitcher />
				</NavbarItem>

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
							// color={
							// 	index === 2
							// 		? 'primary'
							// 		: index === menuItems.length - 1
							// 		? 'danger'
							// 		: 'foreground'
							// }
							color='foreground'
							className='w-full'
							href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
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
