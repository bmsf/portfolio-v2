import { StaticImageData } from 'next/image';

import holidaze from '@/public/projects/holidaze.png';
import bidcircle from '@/public/projects/bidcircle.png';
import ecommerce from '@/public/projects/ecommerce.png';
import bw from '@/public/projects/blomsterwerket.png';
import csm from '@/public/projects/csm.png';
import rainy from '@/public/projects/rainy.png';

interface Project {
	id: number;
	name: string;
	info: string;
	technologies: string[];
	bgTech: string;
	img: StaticImageData;
	font: string;
	color: string;
	github: string;
	link: string;
}

const projectList: Project[] = [
	{
		id: 1,
		name: 'Holidaze',
		info: 'Leveraged two years of skills and knowledge to create a modern, user-friendly application. Collaborated with the official API documentation to plan, design, and build an intuitive user interface for booking holidays and managing venues.',
		technologies: ['React', 'Tailwind', 'Next.js 13', 'shadcn'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: holidaze,
		color: '#181818',
		font: '#f1f1f1',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},
	{
		id: 2,
		name: 'BidCircle',
		info: 'Designed and developed a full-stack auction website where users can register, list items for auction, place bids, and manage their credits. Implemented user authentication, avatar customization, and credit tracking features.',
		technologies: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
		bgTech: 'hsla(0, 0%, 100%, 0.3)',
		img: bidcircle,
		color: '#D3D6E0',
		font: '#28282B',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},
	{
		id: 3,
		name: 'Blomsterwerket',
		info: 'Self developed project targeted towards a small flower shop from a little place called Råde. First project using React in combination with Material UI. Commerce.js used as a eCommerce SDK.',
		technologies: ['React', 'MUI', 'Commerce.js', 'Stripe'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: bw,
		color: '#0D141B',
		font: '#f1f1f1',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},
	{
		id: 4,
		name: 'E-Commerce Store',
		info: 'Project to practice consepts learned in JavaScript Frameworks course. The website features a homepage with product listings, product detail pages, a shopping cart, and a checkout process. ',
		technologies: ['React', 'API Integration', 'Form Validation'],
		bgTech: 'hsla(0, 0%, 100%, 0.6)',
		img: ecommerce,
		color: '#EAEAEA',
		font: '#28282B',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},

	{
		id: 5,
		name: 'Community Science Museum',
		info: 'School project with a goal to develop and design a website for a fictional Community Sience Musem. The project was to test our abilites in the subjects we had in our first semester at Noroff Frontend-Development studies.',
		technologies: ['HTML', 'CSS', 'Adobe XD'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: csm,
		color: '#1C1C1C',
		font: '#f1f1f1',
		github: 'https://github.com/bmsf/semesterproject1',
		link: 'https://fervent-panini-f6e9ad.netlify.app/',
	},
	{
		id: 6,
		name: 'Rainy Days',
		info: 'Focused on design through planning, wireframing and making prototype before using only HTML and CSS to create. After starting with JavaScript I added some functionality like adding items to cart and updating cart through localstorage.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: rainy,
		color: '#6C3B01',
		font: '#f1f1f1',
		github: 'https://github.com/bmsf/eksamen',
		link: 'https://wonderful-payne-f634cd.netlify.app/',
	},
];

export default projectList;
