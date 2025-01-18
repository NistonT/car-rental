import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRegisterUser } from "../types/register.type";

type Props = {
	register: UseFormRegister<IRegisterUser>;
	errors: FieldErrors<IRegisterUser>;
};

export const FormEmail = ({ register, errors }: Props) => {
	return (
		<div className='w-full px-2 mb-4 flex flex-col'>
			<label
				htmlFor='email'
				className='block text-sm font-medium text-gray-400 mb-1'
			>
				Email
			</label>
			<input
				{...register("email", {
					required: "Пожалуйста, введите почту",
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: "Некорректный email",
					},
				})}
				type='email'
				id='email'
				className='w-full bg-gray-700 bg-opacity-20 rounded border border-gray-600 focus:ring-2 focus:ring-green-900 focus:border-green-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
				placeholder='Введите ваш email'
			/>
			{errors.email && (
				<p className='text-red-500 text-sm'>
					{errors.email.message?.toString()}
				</p>
			)}
		</div>
	);
};
