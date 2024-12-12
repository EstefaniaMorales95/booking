import { GrClose } from 'react-icons/gr';
import { cn } from '../utils';

function Menu({ children, openMenu, closeMenu }) {
	return (
		<div className={cn('menu top-full', openMenu && 'top-0')}>
			<button
				className="absolute top-3 right-5 p-1 md:hidden"
				onClick={closeMenu}
			>
				<GrClose className="size-5" />
			</button>
			{children}
		</div>
	);
}

export default Menu;
