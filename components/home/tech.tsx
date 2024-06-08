export default function Tech({ name }: { name: string }) {
	return (
		<li className='bg-primary/10 text-primary font-semibold mr-3 last:mr-0 rounded-md px-2 pt-1 pb-2 text-sm mb-2'>
			{name}
		</li>
	);
}
