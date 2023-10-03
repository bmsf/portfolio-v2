'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@nextui-org/react'; // Ensure `cn` is imported

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Switch } from '@nextui-org/react';

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const [isSelected, setIsSelected] = useState(true);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div>
			<Switch
				defaultSelected
				size='lg'
				color='primary'
				startContent={<SunIcon />}
				endContent={<MoonIcon />}
				classNames={{
					wrapper: cn(
						'overflow-visible',
						theme === 'dark' ? 'dark:bg-primary' : 'bg-primary'
					),
					endContent: cn(
						theme === 'dark' ? 'dark:text-foreground' : 'text-white'
					),
				}}
				onChange={() => {
					if (theme === 'light') {
						setTheme('dark');
					} else {
						setTheme('light');
					}
				}}
			/>
		</div>
	);
}
