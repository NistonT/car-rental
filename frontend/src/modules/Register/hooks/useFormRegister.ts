import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormApi } from "../api/register.api";
import { IRegisterData } from "../types/data.type";
import { IRegisterUser } from "../types/register.type";

// смена темы по времени суток

export const useFormRegister = () => {
	const [messageError, setMessageError] = useState<string | null>("");
	const [errorPassword, setErrorPassword] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterUser>();

	const { mutate: mutationRegisterApi, isError } = useMutation({
		mutationFn: (result: IRegisterData) => RegisterFormApi(result),
		onSuccess: () => {
			setIsSuccess(true);
		},
		onError: error => {
			if (error instanceof AxiosError) {
				setMessageError(error.response?.data.message || error.message);
			} else {
				setMessageError("Произошла неизвестная ошибка");
			}
		},
	});

	const onSubmit: SubmitHandler<IRegisterUser> = async data => {
		if (data.password !== data.password_confirm) {
			setErrorPassword(true);
			return;
		}
		const { password_confirm, isConfirm, ...result } = data;

		setMessageError(null);
		return await mutationRegisterApi(result);
	};

	return {
		errorPassword,
		setErrorPassword,
		register,
		handleSubmit,
		errors,
		onSubmit,
		isSuccess,
		messageError,
		isError,
	};
};
