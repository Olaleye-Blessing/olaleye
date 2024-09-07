'use client';

import ReactPlayer from 'react-player';

export default function Video({ url }: { url: string }) {
	return (
		<figure className='my-6 h-96'>
			<ReactPlayer
				url={url}
				width='100%'
				height='100%'
				volume={0}
				loop
				muted
			/>
		</figure>
	);
}
