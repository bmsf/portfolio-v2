// import bw from '../../assets/images/blomsterwerket.png';
// import csm from '../../assets/images/csm.png';
// import rainy from '../../assets/images/rainy.png';

const projectList = [
	{
		id: 1,
		name: 'Blomsterwerket',
		info: 'Self developed project targeted towards a small flower shop from a little place called Råde. First project using React in combination with Material UI. Commerce.js used as a eCommerce SDK.',
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'React',
			'Commerce.js',
			'Stripe',
		],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		// img: bw,
		color: '#0D141B',
		// font: '#383B40',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},
	{
		id: 2,
		name: 'Community Science Museum',
		info: 'School project with a goal to develop and design a website for a fictional Community Sience Musem. The project was to test our abilites in the subjects we had in our first semester at Noroff Frontend-Development studies.',
		technologies: ['HTML', 'CSS', 'Adobe XD'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		// img: csm,
		color: '#1C1C1C',
		github: 'https://github.com/bmsf/semesterproject1',
		link: 'https://fervent-panini-f6e9ad.netlify.app/',
	},
	{
		id: 3,
		name: 'Rainy Days',
		info: 'Cross course project from studies at Noroff. Focused on design through planning, wireframing and making prototype before using only HTML and CSS to create. After starting with JavaScript I added some functionality like adding items to cart and updating cart through localstorage.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		// img: rainy,
		color: '#6C3B01',
		github: 'https://github.com/bmsf/eksamen',
		link: 'https://wonderful-payne-f634cd.netlify.app/',
	},
];

export default projectList;
