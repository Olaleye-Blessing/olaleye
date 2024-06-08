import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Olaleye Blessing | Software Developer',
	description: '...',
};

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
				{children}
			</body>
		</html>
	);
}
