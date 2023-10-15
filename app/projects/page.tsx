'use client';
import { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import Image from 'next/image';
import { Link, Card, Skeleton } from '@nextui-org/react';
import projectList from '@/app/data/ProjectsData';

export default function ProjectsPage() {
	const [isDataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDataLoaded(true);
		}, 1000);
	}, []);
	return (
		<section className='flex flex-col w-full justify-center items-center'>
			<div className='w-5/6 md:w-2/4'>
				<div className='my-20'>
					<h1 className='text-3xl'>Projects</h1>
					<p className='text-sm text-gray-400'>
						Here are some of the things I&apos;ve created.
					</p>
				</div>
				<div className='flex flex-col items-center relative'>
					{isDataLoaded ? (
						projectList.map((project) => {
							const dynamicStyles = `bg-${project.color} text-${project.font}`;
							return (
								<m.a
									key={project.id}
									className={`flex flex-col text-primary mb-10 items-center cursor-pointer lg:flex-row ${dynamicStyles}`}
									style={{
										backgroundColor: project.color,
										color: project.font,
									}}
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
									<div className='aspect-square w-full relative'>
										<Image
											alt={`Image of project`}
											src={project.img}
											fill
											className='object-cover'
										/>
									</div>
								</m.a>
							);
						})
					) : (
						<Card className='w-full h-[450px] space-y-5 p-16 rounded-none'>
							<div className='flex gap-10'>
								<div className='space-y-6'>
									<Skeleton className='w-2/5 '>
										<div className='h-8 w-3/5 bg-default-200'></div>
									</Skeleton>

									<Skeleton className='w-5/5 '>
										<div className='h-32 w-4/5  bg-default-200'></div>
									</Skeleton>
									<div className='flex gap-4 mt-4'>
										<Skeleton
											className={`text-primary`}
											style={{ width: '100px', height: '60px' }}
										>
											<div className='bg-default-200'></div>
										</Skeleton>
										<Skeleton
											className={`text-primary`}
											style={{ width: '100px', height: '60px' }}
										>
											<div className='bg-default-200'></div>
										</Skeleton>
										<Skeleton
											className={`text-primary`}
											style={{ width: '100px', height: '60px' }}
										>
											<div className='bg-default-200'></div>
										</Skeleton>
										<Skeleton
											className={`text-primary`}
											style={{ width: '100px', height: '60px' }}
										>
											<div className='bg-default-200'></div>
										</Skeleton>
									</div>
									<div className='flex gap-4 mt-4'>
										<Skeleton
											className={`text-primary`}
											style={{ width: '80px', height: '24px' }}
										>
											<div className='bg-default-200'></div>
										</Skeleton>

										<Skeleton
											className={`text-primary`}
											style={{ width: '80px', height: '24px' }}
										>
											<div className='bg-default-200'></div>
										</Skeleton>
									</div>
								</div>
								<div>
									<Skeleton className=''>
										<div className='h-80 w-96 rounded-lg bg-default-300'></div>
									</Skeleton>
								</div>
							</div>
						</Card>
					)}
				</div>
			</div>
		</section>
	);
}
