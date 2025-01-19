"use client";
import { authAtom } from "@/app/jotai/auth.store";
import { useAtomValue } from "jotai";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFormAuthorization } from "../hooks/useFormAuthorization";
import { FormButton } from "./FormButton";
import { FormLogin } from "./FormLogin";
import { FormMessageError } from "./FormMessageError";
import { FormPassword } from "./FormPassword";
import { LinkRegister } from "./LinkRegister";

export const FormAuthorization = () => {
	const {
		register,
		handleSubmit,
		errors,
		onSubmit,
		isSuccess,
		messageError,
		isError,
	} = useFormAuthorization();

	const isAuth = useAtomValue(authAtom);

	useEffect(() => {
		if (isSuccess) {
			redirect("/");
		}
		if (isAuth) {
			redirect("/");
		}
		console.log(isAuth);
	}, [isSuccess, isAuth]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'
		>
			<h2 className='text-white text-lg font-medium title-font mb-5'>
				Авторизация
			</h2>

			<FormLogin register={register} errors={errors} />
			<FormPassword register={register} errors={errors} />
			{isSuccess && !isError
				? ""
				: isError && <FormMessageError messageError={messageError} />}
			<FormButton />
			<LinkRegister />
		</form>
	);
};
