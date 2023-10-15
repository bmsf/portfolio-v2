'use client';
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function AccordionComponent() {
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

	const about = `I'm a 29-year-old frontend developer from Norway. My journey into coding began during the pandemic, and I've recently completed a higher professional degree in frontend development. With a strong passion for technology and web development, I'm excited to continue learning and growing in this field.`;

	const hobbies = `Outside of coding, I have a diverse set of hobbies and interests. I enjoy spending time at the gym, staying active, and maintaining a healthy lifestyle. Golf is another one of my passions, and I love hitting the green whenever I get the chance. I'm also an avid sports fan, and I enjoy watching a variety of sports in my free time.`;

	const experience = `Before diving into the world of coding, I spent five years working in a sporting goods store. This experience helped me gain valuable insights into the sporting industry and customer service. Currently, I'm working as a Technical Support Associate at Garmin. I've been dedicated to my role at Garmin, even while completing my last year of frontend studies. This experience has further honed my technical skills and provided me with real-world problem-solving expertise.`;
	return (
		<Accordion>
			<AccordionItem key='1' aria-label='Accordion 1' title='About'>
				{about}
			</AccordionItem>
			<AccordionItem
				key='3'
				aria-label='Accordion 3'
				title='Hobbies & Interests'
			>
				{hobbies}
			</AccordionItem>
			<AccordionItem key='2' aria-label='Accordion 2' title='Experience'>
				{experience}
			</AccordionItem>
		</Accordion>
	);
}
