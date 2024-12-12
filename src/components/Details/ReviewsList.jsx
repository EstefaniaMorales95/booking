import { useState } from 'react';
import ReviewCard from './ReviewCard';

function ReviewsList({ reviews }) {
	const [visibleReviews, setVibleReviews] = useState(5);
	const loadMoreIncrement = 5;

	const loadMore = () => {
		setVibleReviews(visibleReviews + loadMoreIncrement);
	};
	return (
		<div>
			<div className="mb-4">
				{reviews?.slice(0, visibleReviews)?.map((review) => (
					<ReviewCard key={review?.id} review={review} />
				))}
			</div>
			{visibleReviews < reviews?.length && (
				<div className="flex justify-center">
					<button className="btn" onClick={loadMore}>
						Load more
					</button>
				</div>
			)}

			{reviews?.length === 0 && (
				<p className="font-semibold text-center">No review yet.</p>
			)}
		</div>
	);
}

export default ReviewsList;
