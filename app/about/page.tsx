import AccordionComponent from '@/app/components/AccordionComponent';

export default function AboutPage() {
	return (
		<section className='flex flex-col w-full justify-center items-center'>
			<div className='w-5/6 md:w-2/4 my-20'>
				<h1 className='text-3xl mb-20'>About Me</h1>
				<AccordionComponent />
			</div>
		</section>
	);
}
