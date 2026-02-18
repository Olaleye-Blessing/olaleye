import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next';
import { cn } from '@/lib/utils';
import './globals.css';
import Navbar from '@/components/navbar';
import Header from "@/components/header";
import { generateMetadata } from "@/lib/site-metadata";

export const metadata = generateMetadata();

const fonts = localFont({
  src: [
    { path: './fonts/AirbnbCereal_W_Lt.otf',  weight: '300', style: 'normal' },
    { path: './fonts/AirbnbCereal_W_Bk.otf',  weight: '400', style: 'normal' },
    { path: './fonts/AirbnbCereal_W_Md.otf',  weight: '500', style: 'normal' },
    // { path: './fonts/AirbnbCereal_W_Bd.otf',  weight: '700', style: 'normal' },
    // { path: './fonts/AirbnbCereal_W_XBd.otf', weight: '800', style: 'normal' },
    // { path: './fonts/AirbnbCereal_W_Blk.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-airbnbcereal'
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={cn(
					'bg-black text-white',
					fonts.variable,
				)}
			>
				<div className='w-full max-w-[40rem] mx-auto py-10 px-6'>
					<Header />
					<Navbar />
					{children}
					<Analytics />
				</div>
			</body>
		</html>
	);
}
