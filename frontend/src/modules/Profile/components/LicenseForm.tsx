import { IUser } from "@/types/user.type";
import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addLicenseUserApi } from "../api/addLicenseUser.api";
import { ILicense } from "../types/license.type";
import { MessageError } from "./MessageError";

type Props = {
	user: IUser | undefined | null;
};

export const LicenseForm = ({ user }: Props) => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<string>("");

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ILicense>();

	const onSubmit: SubmitHandler<ILicense> = async license => {
		setMessageError("");
		if (license.license.length !== 10) {
			setMessageError("Лицензия должна состоять из 10 цифр.");
			return;
		}
		try {
			await addLicenseUserApi(user?.id, license)
				.then(response => {
					setIsSuccess(true);
					location.reload();
				})
				.catch(error => {});
		} catch (error) {
			setIsSuccess(false);
			if (error instanceof AxiosError && error.response) {
				setMessageError(error.response.data.message);
			}
		}
	};

	return (
		<div className='w-full bg-[#151b23] p-8 rounded-md'>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<div>
					<input
						{...register("license", {
							required: "Введите номер водительского удостоверения",
						})}
						type='number'
						className='w-full text-3xl px-4 py-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-green-500 focus:outline-none border border-gray-700 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:-webkit-appearance-none [&::-webkit-outer-spin-button]:-webkit-appearance-none'
						placeholder='Введите номер водительского удостоверения'
						maxLength={10}
					/>
					{errors.license && (
						<p className='text-red-500 text-sm'>
							{errors.license.message?.toString()}
						</p>
					)}
				</div>
				<div>
					<input
						type='submit'
						value='Отправить'
						className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md cursor-pointer transition-colors'
					/>
				</div>
			</form>
			{user?.license && (
				<div
					className='bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded-md relative mt-4'
					role='alert'
				>
					<strong className='font-bold'>Успех!</strong>
					<span className='block sm:inline ml-1'>
						Ваша лицензия подтверждена! Ваш номер лицензии:
						<span className='font-semibold ml-1'>{user?.license}</span>
					</span>
				</div>
			)}
			{messageError.length !== 0 && (
				<MessageError messageError={messageError} />
			)}
		</div>
	);
};
