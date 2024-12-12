import { Link } from 'react-router';
import LoginForm from '../components/auth/LoginForm';

function Login() {
	return (
		<div>
			<h1 className="text-lg font-semibold mb-6">Sign in with your account</h1>

			<LoginForm />

			<p className="mt-6">
				¿Do you need an account?
				<Link to="/register" className="text-blue-600 font-semibold">
					Create an account
				</Link>
			</p>
		</div>
	);
}

export { Login };
