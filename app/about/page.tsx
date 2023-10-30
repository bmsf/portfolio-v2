'use client';
import { motion } from 'framer-motion';
import AccordionComponent from '@/app/components/AccordionComponent';
import Image from 'next/image';
import Golf from '@/public/golf.jpeg';
import Torreby from '@/public/torreby.jpeg';

export default function AboutPage() {
	return (
		<section className='flex flex-col w-full justify-center items-center'>
			<div className='w-5/6 md:w-2/4 my-20'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.1 }}
					className='mb-20'
				>
					<h1 className='text-3xl'>About Me</h1>
					<p className='text-sm text-gray-400'>
						Here you have some images and information
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
				>
					<AccordionComponent />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					className='flex mt-20 items-center w-full'
				>
					<div className='relative w-[500px] h-[300px]'>
						<Image src={Golf} fill alt='golf' className='object-cover' />
					</div>

					<div className='relative w-[500px] h-[300px]'>
						<Image src={Torreby} fill alt='golf' className='object-cover' />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
