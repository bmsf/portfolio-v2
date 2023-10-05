'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Hero from './components/layout/Hero';
import Projects from './components/layout/Projects';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Hero />
			{/* <Projects /> */}
		</main>
	);
}
