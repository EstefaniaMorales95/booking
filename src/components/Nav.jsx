import { Link } from 'react-router';
import { useAuth } from '../context/auth';

function Nav() {
	const { isAuth, logout } = useAuth();
	return (
		<div className="grid place-content-center py-5">
			<div className="flex items-center gap-6">
				{isAuth ? (
					<>
						<Link
							to="/reservations"
							className="text-md font-semibold hover:text-blue-500 transition-colors"
						>
							Reservations
						</Link>
						<button className="btn bg-red-500" onClick={logout}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link
							to="/login"
							className="text-md font-semibold hover:text-blue-500 transition-colors"
						>
							Login
						</Link>

						<Link
							to="/register"
							className="text-md font-semibold hover:text-blue-500 transition-colors"
						>
							Sing up
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default Nav;
