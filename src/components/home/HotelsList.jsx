import HotelCard from './HotelCard';

function HotelList({ hotels }) {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6">
			{hotels.map((hotel) => (
				<HotelCard key={hotel.id} hotel={hotel} />
			))}

			{hotels.length === 0 && <p>No hotels found.</p>}
		</div>
	);
}

export default HotelList;
