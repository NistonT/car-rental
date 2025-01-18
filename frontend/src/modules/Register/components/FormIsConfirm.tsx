import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRegisterUser } from "../types/register.type";

type Props = {
	register: UseFormRegister<IRegisterUser>;
	errors: FieldErrors<IRegisterUser>;
};

export const FormIsConfirm = ({ register, errors }: Props) => {
	return (
		<div className='w-full px-2 mb-4 transition-all'>
			<label className='inline-flex items-center cursor-pointer'>
				<input
					{...register("isConfirm", {
						required: "Вы должны согласиться на обработку данных",
					})}
					type='checkbox'
					className='form-checkbox h-5 w-5 text-green-500 rounded focus:ring-2 focus:ring-green-900 focus:ring-opacity-50 border-gray-600'
				/>
				<span className='ml-2 text-sm text-gray-400'>
					Я согласен на обработку персональных данных.
				</span>
			</label>
			{errors.isConfirm && (
				<p className='text-red-500 text-sm'>
					{errors.isConfirm.message?.toString()}
				</p>
			)}
		</div>
	);
};
