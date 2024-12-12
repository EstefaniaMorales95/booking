import { Link } from 'react-router';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { LiaBedSolid } from 'react-icons/lia';
import { HiCurrencyDollar } from 'react-icons/hi2';
import { priceFormat } from '../../utils';

function ReservationCard({ reservation, onDelete, onRate }) {
	//sacar los dias de la fehca de llegada y slaida
	const checkInDay = new Date(reservation.checkIn + 'T00:00:00');

	const checkOutDay = new Date(reservation.checkOut + 'T00:00:00');

	const millisecondsPerDay = 1000 * 60 * 60 * 24; //milisegundos por dia

	const nights = Math.ceil((checkOutDay - checkInDay) / millisecondsPerDay);

	//Sumar el precio de las noches por el precio

	const pricePerNight = parseInt(reservation?.hotel?.price);

	/// Calcular el precio total
	const totalPrice = pricePerNight * nights;

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 m-5">
			<h2 className="bg-blue-500 text-white text-xl font-semibold p-4">
				<Link to={`/hotel/${reservation?.hotel.id}`}>
					{reservation?.hotel.name}
				</Link>
			</h2>
			<div className="p-6 flex flex-col gap-5">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<FaCalendarAlt className="size-8" />
						<div>
							<p className="font-semibold">Arrival</p>
							<p className="text-xs">{reservation.checkIn}</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<FaCalendarAlt className="size-8" />
						<div>
							<p className="font-semibold">Departure</p>
							<p className="text-xs">{reservation.checkOut}</p>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<FaLocationPin />
					<p className="text-sm">
						{reservation?.hotel?.city?.name},{' '}
						{reservation?.hotel?.city?.country}
					</p>
				</div>

				<div className="flex items-center gap-2">
					<LiaBedSolid />
					<p>
						{nights} {nights === 1 ? 'night' : 'nighs'}
					</p>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<HiCurrencyDollar />

						<p className="font-semibold text-lg ">Price per night</p>
					</div>
					<p className="font-semibold">{priceFormat.format(pricePerNight)}</p>
				</div>

				<div className="flex justify-between items-center border-t pt-4">
					<div className="flex items-center gap-2">
						<HiCurrencyDollar />

						<p className="font-semibold text-lg ">Total</p>
					</div>
					<p className="font-semibold">{priceFormat.format(totalPrice)}</p>
				</div>
			</div>

			<div className=" flex justify-between bg-gray-50 py-4 px-6">
				<button
					className="btn bg-red-500"
					onClick={() => onDelete(reservation?.id)}
				>
					Delete
				</button>
				<button
					className="btn bg-yellow-500"
					onClick={() => onRate(reservation?.id)}
				>
					Rate
				</button>
			</div>
		</div>
	);
}

export default ReservationCard;
