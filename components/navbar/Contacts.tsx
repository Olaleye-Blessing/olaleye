import { cn } from '@/lib/utils';
import { MoveUpRight } from 'lucide-react';

export default function Contacts() {
	return (
		<ul>
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
				href='https://docs.google.com/document/d/1u8sv0wNbkGsq2eGa3yHVyOvfn5x294Xsn10QhtdxAOg/edit'
				text='Resume'
				className='fixed top-2 right-2 md:static'
			/>
		</ul>
	);
}

interface ContactProps {
	href: string;
	text: string;
	className?: string;
}

const Contact = ({ href, text, className }: ContactProps) => {
	return (
		<li className={cn('text-primary odd:text-foreground', className)}>
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				className='mr-2 hover:underline'
			>
				<span>{text}</span>
				<span className='ml-[0.1rem]'>
					<MoveUpRight className='w-3 h-3' />
				</span>
			</a>
		</li>
	);
};
