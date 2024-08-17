import { MoveUpRight } from 'lucide-react';

export default function Contacts() {
	return (
		<ul className='flex items-center justify-end flex-wrap'>
			<Contact
				href='https://www.linkedin.com/in/blessing-olaleye-139a22204/'
				text='Linkedin'
			/>
			<Contact
				href='mailto:olaleyedev@gmail.com'
				text='Olaleyedev@gmail.com'
			/>
			<Contact href='https://github.com/Olaleye-Blessing' text='Github' />
			<Contact
				href='https://www.blessingolaleye.xyz/resume.pdf'
				text='Resume'
			/>
		</ul>
	);
}

interface ContactProps {
	href: string;
	text: string;
}

const Contact = ({ href, text }: ContactProps) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='text-primary odd:text-foreground mr-2 hover:underline flex items-center justify-center'
		>
			<span>{text}</span>
			<span className='ml-[0.1rem]'>
				<MoveUpRight className='w-3 h-3' />
			</span>
		</a>
	);
};
