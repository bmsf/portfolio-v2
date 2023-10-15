import AccordionComponent from '@/app/components/AccordionComponent';

export default function AboutPage() {
	return (
		<section className='flex flex-col w-full justify-center items-center mt-12'>
			<div className='w-1/3'>
				<h1 className='text-3xl mb-20'>About Me</h1>
				<AccordionComponent />
			</div>
		</section>
	);
}
