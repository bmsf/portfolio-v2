import AccordionComponent from '@/app/components/AccordionComponent';
import Image from 'next/image';
import Golf from '@/public/golf.jpeg';
import Me from '@/public/me.jpeg';
import Torreby from '@/public/torreby.jpeg';

export default function AboutPage() {
	return (
		<section className='flex flex-col w-full justify-center items-center'>
			<div className='w-5/6 md:w-2/4 my-20'>
				<div className='mb-20'>
					<h1 className='text-3xl'>About Me</h1>
					<p className='text-sm text-gray-400'>
						Here you have some images and information
					</p>
				</div>
				<AccordionComponent />
				<div className='flex mt-20 items-center w-full'>
					<div className='relative w-[500px] h-[300px]'>
						<Image src={Golf} fill alt='golf' className='object-cover' />
					</div>

					<div className='relative w-[500px] h-[300px]'>
						<Image src={Torreby} fill alt='golf' className='object-cover' />
					</div>
				</div>
			</div>
		</section>
	);
}
