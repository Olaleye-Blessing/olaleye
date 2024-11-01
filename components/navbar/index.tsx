import Pages from './pages';
import Contacts from './Contacts';
import Hamburger from './hamburger';
import './index.css';

export default function Navbar() {
	return (
		<nav className='flex items-center justify-between flex-wrap sticky p-4 top-0 right-0 left-0 z-50 backdrop-blur-[1.3rem]'>
			<Hamburger />
			<div className='nav__contents'>
				<Pages />
				<Contacts />
			</div>
		</nav>
	);
}
