import React from 'react';
import { motion as m } from 'framer-motion';
import { Button, Avatar, AvatarGroup } from '@nextui-org/react';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import animationData from '@/public/hero-animation.json';
import animationDataLight from '@/public/hero-animation-light.json';
import me from '@/public/me.jpg';
import Image from 'next/image';

export default function Hero() {
	const { theme, setTheme } = useTheme();
	return (
		<section className='flex flex-col lg:flex-row md:w-3/4 mx-auto items-center mt-12'>
			<m.div className='flex flex-col gap-3 mx-6 items-center'>
				<m.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.1 }}
					className='text-5xl font-bold text-center'
				>
					Bjørn-Magnus Svendsen Fromreide👋
				</m.h1>
				<m.div
					className='h-20 w-20 relative'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
				>
					<Image
						src={me}
						alt='avatar of me'
						fill
						className='rounded-full object-cover'
					/>
				</m.div>
				<m.p
					className='text-center w-2/3'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					I write code with an eye for making cool stuff with cutting-edge
					technology.
				</m.p>
			</m.div>
			<m.div
				initial={{ opacity: 0, scale: 0.8, y: -50 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.4 }}
				className='xl:w-2/4'
			>
				{theme === 'dark' ? (
					<Lottie animationData={animationData} loop={true} />
				) : (
					<Lottie animationData={animationDataLight} loop={true} />
				)}
			</m.div>
		</section>
	);
}
