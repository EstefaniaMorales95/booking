import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import Brand from './Brand';
import Menu from './MEnu';
import Nav from './Nav';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="sticky top-0 bg-white h-20 w-full shadow-lg z-10">
			<div className="max-w-5x1 mx-auto px-5 h-full flex items-center justify-between">
				<Brand />

				<Menu openMenu={isOpen} closeMenu={handleToggleMenu}>
					<Nav />
				</Menu>

				<button className="p-1 md:hidden" onClick={handleToggleMenu}>
					<TiThMenu className="size-7" />
				</button>
			</div>
		</div>
	);
}

export default Header;
