import { useEffect, useState } from 'react';
import useApiFetch from '../hooks/useApiFetch';
import ReservationsList from '../components/reservations/ReservationsList';
import Modal from '../components/Modal';
import Review from '../components/reservations/Review';

function Reservations() {
	const [reservations, fetchReservations] = useApiFetch();
	const [openModal, setOpenModal] = useState(false);
	const [child, setChild] = useState(null);

	useEffect(() => {
		fetchReservations({
			url: '/bookings',
		});
	}, []);

	const handleDelete = (id) => {
		fetchReservations({
			url: `/bookings/${id}`,
			method: 'DELETE',
		});
	};

	const closeModal = () => {
		setOpenModal(false);
	};
	const handleOpenModal = (id) => {
		setOpenModal(true);
		setChild(<Review hotelId={id} closeModal={closeModal} />);
	};
	return (
		<div className="max-w-5x1 mx-auto px-5 py-16">
			<ReservationsList
				reservations={reservations}
				onDelete={handleDelete}
				onRate={handleOpenModal}
			/>

			<button className="btn" onClick={handleOpenModal}>
				Open
			</button>

			<Modal openModal={openModal} closeModal={closeModal}>
				{child}
			</Modal>
		</div>
	);
}

export { Reservations };
