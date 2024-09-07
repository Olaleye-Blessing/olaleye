export default function Summary({ summary }: { summary: string }) {
	return (
		<>
			<details className='details'>
				<summary className='details__summary'>
					<span className='details__summary--title'>Summary</span>
				</summary>
				<p className='content details__content'>{summary}</p>
			</details>
		</>
	);
}
