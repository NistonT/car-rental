import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IAuthorizationForm } from "../types/auth.type";

type Props = {
	register: UseFormRegister<IAuthorizationForm>;
	errors: FieldErrors<IAuthorizationForm>;
};

export const FormPassword = ({ register, errors }: Props) => {
	return (
		<div className='relative mb-4'>
			<label htmlFor='password' className='leading-7 text-sm text-gray-400'>
				Пароль
			</label>
			<input
				{...register("password", { required: "Введите пароль" })}
				type='password'
				id='password'
				className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
			{errors.password && (
				<p className='text-red-500 text-sm'>
					{errors.password.message?.toString()}
				</p>
			)}
		</div>
	);
};
