"use client";
import { authAtom } from "@/app/jotai/auth.store";
import { useAtomValue } from "jotai";
import { useFormRegister } from "../hooks/useFormRegister";
import { FormButton } from "./FormButton";
import { FormEmail } from "./FormEmail";
import { FormErrorPassword } from "./FormErrorPassword";
import { FormIsConfirm } from "./FormIsConfirm";
import { FormIsSuccess } from "./FormIsSuccess";
import { FormLinkAuthorization } from "./FormLinkAuthorization";
import { FormLogin } from "./FormLogin";
import { FormMessageError } from "./FormMessageError";
import { FormName } from "./FormName";
import { FormPassword } from "./FormPassword";
import { FormPasswordConfirm } from "./FormPasswordConfirm";
import { FormPatronymic } from "./FormPatronymic";
import { FormSurname } from "./FormSurname";

export const MainForm = () => {
	const {
		errorPassword,
		register,
		handleSubmit,
		errors,
		onSubmit,
		isSuccess,
		messageError,
		isError,
	} = useFormRegister();

	const isAuth = useAtomValue(authAtom);
	console.log(isAuth);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='lg:w-2/3 md:w-3/4 mx-auto'
		>
			<div className='flex flex-wrap -mx-2'>
				<FormName register={register} errors={errors} />
				<FormSurname register={register} errors={errors} />
				<FormPatronymic register={register} errors={errors} />
				<FormEmail register={register} errors={errors} />
				<FormLogin register={register} errors={errors} />
				<FormPassword register={register} errors={errors} />
				<FormPasswordConfirm register={register} errors={errors} />
				<FormIsConfirm register={register} errors={errors} />
				{errorPassword && <FormErrorPassword />}
				{isSuccess && !isError ? (
					<FormIsSuccess />
				) : (
					isError && <FormMessageError messageError={messageError} />
				)}
				<FormButton />
				{!isSuccess && !isError && <FormLinkAuthorization />}
			</div>
		</form>
	);
};
