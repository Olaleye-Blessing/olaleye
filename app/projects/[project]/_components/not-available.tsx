import Projects from '@/components/projects';

export default function NotAvailable() {
	return (
		<main>
			<header className='px-4 mb-8 mt-4 flex flex-col items-center justify-center text-center'>
				<h1>Not Found</h1>
				<p className='text-destructive'>
					The detail of this project is not available.
				</p>
			</header>
			<Projects
				title='Projects With Details'
				description='These projects have a detailed explantion of what they do and what I learnt.'
			/>
		</main>
	);
}
