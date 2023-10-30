'use client';
import { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@nextui-org/react';
import projectList from '@/app/data/ProjectsData';

export default function ProjectsPage() {
	const [isDataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		// Simulating an asynchronous data fetch. Replace with actual fetch if needed.
		const fetchData = async () => {
			// If `projectList` is not asynchronous, you can remove this timeout.
			setTimeout(() => {
				setDataLoaded(true);
			}, 1000);
		};

		fetchData();
	}, []);

	if (!isDataLoaded) {
		return null; // or return <LoadingSpinner /> if you have a spinner component
	}
	return (
		<section className='flex flex-col w-full justify-center items-center'>
			<div className='w-5/6 md:w-2/4'>
				<div className='my-20'>
					<m.h1
						className='text-3xl'
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.4 }}
					>
						Projects
					</m.h1>
					<m.p
						className='text-sm text-gray-400'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						Here are some of the things I&apos;ve created.
					</m.p>
				</div>
				<div className='flex flex-col items-center relative'>
					{projectList.map((project, index) => {
						const dynamicStyles = `bg-${project.color} text-${project.font}`;
						return (
							<m.a
								key={project.id}
								className={`flex flex-col text-primary mb-10 items-center cursor-pointer xl:flex-row ${dynamicStyles}`}
								style={{
									backgroundColor: project.color,
									color: project.font,
								}}
								initial={{ opacity: 0, y: -30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
							>
								<div>
									<div className='p-12'>
										<div className='flex flex-col align-center justify-center'>
											<h2
												className='text-3xl font-bold'
												data-aos='fade-up'
												data-aos-duration='1000'
												data-aos-delay='500'
											>
												{project.name}
											</h2>
											<p
												data-aos='fade-up'
												data-aos-duration='1000'
												data-aos-delay='800'
												className='my-10 leading-loose'
											>
												{project.info}
											</p>
										</div>

										<div className='flex flex-wrap uppercase'>
											{project.technologies.map((tech) => {
												return (
													<div
														data-aos='fade-right'
														data-aos-duration='1000'
														data-aos-delay='500'
														key={tech}
														className='tech p-3 my-2 mr-3'
														style={{ backgroundColor: project.bgTech }}
													>
														{tech}
													</div>
												);
											})}
										</div>
										<div className='flex gap-4 mt-4'>
											<Link
												className={`text-${project.font}`}
												isExternal
												href={project.github}
												showAnchorIcon
											>
												GitHub
											</Link>
											<Link
												className={`text-${project.font}`}
												isExternal
												href={project.link}
												showAnchorIcon
											>
												Live Demo
											</Link>
										</div>
									</div>
								</div>
								<div className='aspect-video w-full relative'>
									<Image
										alt={`Image of project`}
										src={project.img}
										fill
										className='object-cover'
									/>
								</div>
							</m.a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
