import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});
function LoginForm() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = (dataForm) => {
		login(dataForm);
		toast('Welcome to Bookings App');
		reset();
		navigate('/');
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label className="block font-semibold "> E-mail </label>
				<input
					type="email"
					placeholder="type your email"
					className="input-form"
					{...register('email')}
				/>

				{errors.email && (
					<p className="error-validation block my-4">{errors.email.message}</p>
				)}
			</div>

			<div className="mb-4">
				<label className="block font-semibold ">Password</label>
				<input
					type="password"
					placeholder="Type you password"
					className="input-form"
					{...register('password')}
				/>
				{errors.password && (
					<p className="error-validation block my-4">
						{errors.password.message}
					</p>
				)}
			</div>

			<button className="btn w-full">Sign in</button>
		</form>
	);
}

export default LoginForm;
