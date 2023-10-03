'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-3xl'>Hello</h1>
			<ThemeSwitcher />
			<Button color='primary' variant='solid'>
				Solid
			</Button>
			<Button color='primary' variant='faded'>
				Faded
			</Button>
			<Button color='primary' variant='bordered'>
				Bordered
			</Button>
			<Button color='primary' variant='light'>
				Light
			</Button>
			<Button color='primary' variant='flat'>
				Flat
			</Button>
			<Button color='primary' variant='ghost'>
				Ghost
			</Button>
			<Button color='primary' variant='shadow'>
				Shadow
			</Button>
		</main>
	);
}
