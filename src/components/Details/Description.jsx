import { SlLocationPin } from 'react-icons/sl';
import RatingStars from '../RatingStars';

function Description({ rating, address, description }) {
	return (
		<div>
			<div className="flex items-center gap-2">
				<RatingStars rating={rating} />
				<span className="text-sm">{rating}</span>
			</div>
			<p className="flex items-center gap-1 mb-4">
				<SlLocationPin /> <span className="text-xs">{address}</span>
			</p>
			<p>{description}</p>
		</div>
	);
}
export default Description;
