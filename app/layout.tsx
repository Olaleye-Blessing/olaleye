import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export { metadata } from '@/lib/site-metadata';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={cn(
					'bg-background text-foreground font-sans antialiased',
					inter.className
				)}
			>
				<div className='w-full max-w-6xl mx-auto'>{children}</div>
			</body>
		</html>
	);
}
