import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRegisterUser } from "../types/register.type";

type Props = {
	register: UseFormRegister<IRegisterUser>;
	errors: FieldErrors<IRegisterUser>;
};

export const FormPassword = ({ register, errors }: Props) => {
	return (
		<>
			<div className='w-full px-2 mb-4 flex flex-col'>
				<label
					htmlFor='password'
					className='block text-sm font-medium text-gray-400 mb-1'
				>
					Пароль
				</label>
				<input
					{...register("password", {
						required: "Пожалуйста, введите пароль",
						pattern: {
							value:
								/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/,
							message:
								"Пароль должен содержать не менее 6 символов английской раскладки, верхнего и нижнего регистра.",
						},
					})}
					type='password'
					id='password'
					className='w-full bg-gray-700 bg-opacity-20 rounded border border-gray-600 focus:ring-2 focus:ring-green-900 focus:border-green-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
					placeholder='Придумайте пароль'
				/>
				{errors.password && (
					<p className='text-red-500 text-sm'>
						{errors.password.message?.toString()}
					</p>
				)}
			</div>
		</>
	);
};
