// import React from 'react';

// import { motion as m } from 'framer-motion';

// import Image from 'next/image';

// import projectList from '@/app/data/ProjectsData';

// export default function Projects() {
// 	return (
// 		<section
// 			className='flex flex-col items-center justify-between mb-10'
// 			id='projects'
// 		>
// 			<h2
// 				data-aos='fade-up'
// 				data-aos-duration='1000'
// 				className='m-24 text-4xl font-extrabold text-center dark:bg-darkModeBg dark:text-white'
// 			>
// 				Projects
// 			</h2>

// 			<div className='flex flex-col items-center'>
// 				{projectList.map((project) => {
// 					return (
// 						<m.a
// 							key={project.id}
// 							className=' flex flex-col text-primary w-10/12  mb-10 items-center cursor-pointer lg:flex-row'
// 							style={{
// 								backgroundColor: project.color,
// 								// color: project.font,
// 							}}
// 							// onClick={() => window.open(`${project.link}`, '_blank')}
// 						>
// 							<div>
// 								<div className='p-12'>
// 									<div className='flex flex-col align-center justify-center'>
// 										<h3
// 											className='text-3xl font-bold text-center lg:text-left'
// 											data-aos='fade-up'
// 											data-aos-duration='1000'
// 											data-aos-delay='500'
// 										>
// 											{project.name}
// 										</h3>
// 										<p
// 											data-aos='fade-up'
// 											data-aos-duration='1000'
// 											data-aos-delay='800'
// 											className='my-10 leading-loose'
// 										>
// 											{project.info}
// 										</p>
// 									</div>

// 									<div className='flex flex-wrap uppercase'>
// 										{project.technologies.map((tech) => {
// 											return (
// 												<div
// 													data-aos='fade-right'
// 													data-aos-duration='1000'
// 													data-aos-delay='500'
// 													// key={project.tech}
// 													className='tech p-3 my-2 mr-3'
// 													style={{ backgroundColor: 'project.bgTech' }}
// 												>
// 													{tech}
// 												</div>
// 											);
// 										})}
// 									</div>
// 								</div>
// 							</div>
// 							{/* <Image
// 								data-aos='fade-right'
// 								data-aos-duration='1000'
// 								data-aos-delay='500'
// 								alt={`Image of project`}
// 								src={project.img}
// 								className='w-6/6 sm:w-4/6 lg:w-3/6'
// 							/> */}
// 						</m.a>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// }
