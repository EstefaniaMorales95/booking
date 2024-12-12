import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { cn } from '../../utils';

function ReviewRating({ setReview }) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const handleClick = (index) => {
		setReview((prevState) => ({
			...prevState,
			rating: index,
		}));
		setRating(0);
		setHover(0);
	};
	const handleHover = (index) => {
		setHover(index);
	};
	return (
		<div className="flex gap-1">
			{[...Array(5)].map((_, index) => (
				<button
					key={index + 1}
					onClick={() => handleClick(index + 1)}
					onMouseEnter={() => handleHover(index + 1)}
					className="text-gray-400"
				>
					<FaStar
						className={cn('text-3xl', hover > index && 'text-yellow-500')}
					/>
				</button>
			))}
		</div>
	);
}

export default ReviewRating;
