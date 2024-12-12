import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(6),
	gender: z.enum(['male', 'female', 'other'], { message: 'select a genre' }),
});
function RegisterForm() {
	const { register: createUser } = useAuth();
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = (dataForm) => {
		createUser(dataForm);
		reset();
		toast('Your account has been created successfully🥳');
		navigate('/login');
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label className="block font-semibold "> First Name </label>
				<input
					placeholder="first Name"
					className="input form"
					{...register('firstName')}
				/>

				{errors.firstName && (
					<p className="error-validation">{errors.firstName.message}</p>
				)}
			</div>

			<div className="mb-4">
				<label className="block font-semibold "> Last Name </label>
				<input
					placeholder="last Name"
					className="input form"
					{...register('lastName')}
				/>

				{errors.lastName && (
					<p className="error-validation">{errors.lastName.message}</p>
				)}
			</div>

			<div className="mb-4">
				<label className="block font-semibold "> Email </label>
				<input
					placeholder="email"
					className="input form"
					{...register('email')}
				/>

				{errors.email && (
					<p className="error-validation">{errors.email.message}</p>
				)}
			</div>

			<div className="mb-4">
				<label className="block font-semibold ">Password</label>
				<input
					type="password"
					placeholder="password"
					className="input-form"
					{...register('password')}
				/>
				{errors.password && (
					<p className="error-validation block my-4">
						{errors.password.message}
					</p>
				)}
			</div>

			<div className="mb-4">
				<label className="block font-semibold">Gender</label>
				<select className="input-form" {...register('gender')}>
					<option value="">Select a genre</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
				{errors.gender && (
					<span className="error-validation">{errors.gender.message}</span>
				)}
			</div>
			<button className="btn w-full">Create an account</button>
		</form>
	);
}

export default RegisterForm;
