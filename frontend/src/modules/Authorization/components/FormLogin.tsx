import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IAuthorizationForm } from "../types/auth.type";

type Props = {
	register: UseFormRegister<IAuthorizationForm>;
	errors: FieldErrors<IAuthorizationForm>;
};

export const FormLogin = ({ register, errors }: Props) => {
	return (
		<div className='relative mb-4'>
			<label htmlFor='login' className='leading-7 text-sm text-gray-400'>
				Логин
			</label>
			<input
				autoComplete='off'
				type='text'
				id='login'
				{...register("login", { required: "Введите логин" })}
				className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
			{errors.login && (
				<p className='text-red-500 text-sm'>
					{errors.login.message?.toString()}
				</p>
			)}
		</div>
	);
};
