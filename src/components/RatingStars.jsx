import { FaRegStar, FaStarHalfStroke, FaStar } from 'react-icons/fa6';

function RatingStars({ rating }) {
	const renderStar = (index) => {
		if (index < Math.floor(rating)) {
			return <FaStar />;
		} else if (index < rating) {
			return <FaStarHalfStroke />;
		} else {
			return <FaRegStar />;
		}
	};
	return (
		<div className="flex items-center gap-2">
			<span className="flex items-center">
				{[...Array(5)].map((_, index) => {
					return (
						<span key={index} className="text-amber-300">
							{renderStar(index)}
						</span>
					);
				})}
			</span>
		</div>
	);
}

export default RatingStars;
