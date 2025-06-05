'use client';

const color = 'text-gray-600';
const size = 'w-6 h-6';
const onClick = () =>
	window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });

export default function ScrollDownArrow() {
	return (
		<div className='flex flex-col items-center space-y-2'>
			<span className={`text-sm font-medium ${color} animate-pulse`}>
				Scroll Down
			</span>

			{/* Animated arrow container */}
			<div className='cursor-pointer' onClick={onClick}>
				{/* Double chevron arrows with staggered animation */}
				<div className='relative flex flex-col items-center'>
					<svg
						className={`${size} ${color} animate-bounce`}
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						style={{ animationDelay: '0s' }}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7m7 7V3'
						/>
					</svg>

					{/* Second arrow with delayed animation */}
					<svg
						className={`${size} ${color} animate-bounce -mt-3 opacity-60`}
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						style={{ animationDelay: '0.2s' }}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
