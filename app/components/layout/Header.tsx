'use client';
import React from 'react';
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineMail,
} from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';

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
						<ModalContent className='p-8'>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1 text-xl'>
										Connect
									</ModalHeader>
									<ModalBody>
										<p>
											Have a question or just want to chat? Feel free to email
											me. You can also hit me up on socials.
										</p>

										<div className='flex gap-4 items-center my-8 flex-wrap'>
											<Button
												color='warning'
												variant='faded'
												aria-label='Github'
												size='lg'
												endContent={<AiOutlineGithub />}
												className='w-40'
											>
												<Link isExternal href='https://github.com/bmsf'>
													GitHub
												</Link>
											</Button>
											<Button
												color='warning'
												variant='faded'
												aria-label='Instagram'
												size='lg'
												endContent={<AiOutlineInstagram />}
												className='w-40'
											>
												<Link
													isExternal
													href='https://www.instagram.com/bmfromreide/'
												>
													Instagram
												</Link>
											</Button>
											<Button
												color='warning'
												variant='faded'
												aria-label='LinkedIn'
												size='lg'
												endContent={<AiOutlineLinkedin />}
												className='w-40'
											>
												<Link
													isExternal
													href='https://www.linkedin.com/in/bj%C3%B8rn-magnus-fromreide-18b1a1170/'
												>
													LinkedIn
												</Link>
											</Button>
											<Button
												color='warning'
												variant='faded'
												aria-label='LinkedIn'
												size='lg'
												endContent={<AiOutlineMail />}
												className='w-40'
											>
												<Link href='mailto:fromreide94@gmail.com'>Email</Link>
											</Button>
										</div>
									</ModalBody>
									{/* <ModalFooter>
										<Button color='danger' variant='light' onPress={onClose}>
											Close
										</Button>
										<Button color='primary' onPress={onClose}>
											Action
										</Button>
									</ModalFooter> */}
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
