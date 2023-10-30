'use client';
import { Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function TechnologiesPage() {
	return (
		<section className='flex flex-col w-full justify-center items-center'>
			<motion.div
				className='w-5/6 md:w-2/4 my-20'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<motion.h1
					className='text-3xl'
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
				>
					Technologies
				</motion.h1>

				<div className='max-w-md'>
					<motion.div
						className='space-y-1'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						<p className='text-small text-default-400'>
							These are the technologies I like to use in my projects:
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.4 }}
					>
						<Divider className='my-4' />
					</motion.div>

					<motion.div
						className='flex h-5 items-center space-x-4 text-md'
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<div>React.js</div>
						<Divider orientation='vertical' />
						<div>Next.js</div>
						<Divider orientation='vertical' />
						<div>Tailwind</div>
						<Divider orientation='vertical' />
						<div>Git</div>
						<Divider orientation='vertical' />
						<div>HTML</div>
						<Divider orientation='vertical' />
						<div>CSS</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
