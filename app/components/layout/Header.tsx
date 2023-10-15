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
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
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

	const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
					<Button onPress={onOpen} color='primary' variant='shadow'>
						Contact
					</Button>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>
										Modal Title
									</ModalHeader>
									<ModalBody>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Nullam pulvinar risus non risus hendrerit venenatis.
											Pellentesque sit amet hendrerit risus, sed porttitor quam.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Nullam pulvinar risus non risus hendrerit venenatis.
											Pellentesque sit amet hendrerit risus, sed porttitor quam.
										</p>
										<p>
											Magna exercitation reprehenderit magna aute tempor
											cupidatat consequat elit dolor adipisicing. Mollit dolor
											eiusmod sunt ex incididunt cillum quis. Velit duis sit
											officia eiusmod Lorem aliqua enim laboris do dolor
											eiusmod. Et mollit incididunt nisi consectetur esse
											laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
											deserunt nostrud ad veniam.
										</p>
									</ModalBody>
									<ModalFooter>
										<Button color='danger' variant='light' onPress={onClose}>
											Close
										</Button>
										<Button color='primary' onPress={onClose}>
											Action
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
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
