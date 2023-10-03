import React from 'react';
import { motion as m } from 'framer-motion';
import { Button } from '@nextui-org/react';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import animationData from '@/public/hero-animation.json';
import animationDataLight from '@/public/hero-animation-light.json';

export default function Hero() {
	const { theme, setTheme } = useTheme();
	return (
		<div className='flex flex-col lg:flex-row md:w-3/4 mx-auto items-center mt-12'>
			<div className='flex flex-col gap-3 mx-6 items-center'>
				<h1 className='text-5xl font-bold text-center'>
					Bjørn-Magnus Svendsen Fromreide👋
				</h1>
				<h2 className='text-center'>
					Crafting digital solutions with an eye for design & cutting-edge
					technology.
				</h2>
				<Button color='primary' className='w-1/4 mt-4 h-12'>
					View My Work
				</Button>
			</div>
			<m.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className='xl:w-2/4'
			>
				{theme === 'dark' ? (
					<Lottie animationData={animationData} loop={true} />
				) : (
					<Lottie animationData={animationDataLight} loop={true} />
				)}
			</m.div>
		</div>
	);
}
