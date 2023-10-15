'use client';
import { Divider } from '@nextui-org/react';

export default function TechnologiesPage() {
	return (
		<section className='flex flex-col w-full justify-center items-center'>
			<div className='w-5/6 md:w-2/4 my-20'>
				<h1 className='text-3xl '>Technologies</h1>
				<div className='max-w-md'>
					<div className='space-y-1'>
						<p className='text-small text-default-400'>
							These are the technologies I like to use in my projects:
						</p>
					</div>
					<Divider className='my-4' />
					<div className='flex h-5 items-center space-x-4 text-md'>
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
					</div>
				</div>
			</div>
		</section>
	);
}
