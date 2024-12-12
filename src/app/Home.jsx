import { useEffect } from 'react';
import { useHotels } from '../context/hotels';
import HotelsList from '../components/home/HotelsList';
import Search from '../components/home/Search';
import { MdOutlineFilterAlt } from 'react-icons/md';
import Filter from '../components/home/Filter';
import Menu from '../components/Menu';
function Home() {
	const { hotels, getAll } = useHotels();
	const [result, setResult] = useState('');
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		if (hotels.length === 0) {
			getAll();
		}
	}, []);

	const filtered = hotels?.filter((hotel) =>
		hotel?.name.toLowerCase().includes(result),
	);

	const handleToggle = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<div>
			<section className="max-w-5xl mx-auto px-5 py-10">
				<div className="mb-8 flex items-center justify-center gap-4">
					<Search setResult={setResult} />
					<button className="md:hidden" onClick={handleToggle}>
						<MdOutlineFilterAlt className="size-8" />
					</button>
					<Menu openMenu={openMenu} closeMenu={handleToggle}>
						<Filter setResult={setResult} />
					</Menu>
				</div>
				<HotelsList hotels={filtered} />
			</section>
		</div>
	);
}

export { Home };
