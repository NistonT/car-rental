import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthorizationFormApi } from "../api/authorization.api";
import { IAuthorizationForm } from "../types/auth.type";

export const useFormAuthorization = () => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<string | null>("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IAuthorizationForm>();

	const { mutate: handlerAuthorizationApi, isError } = useMutation({
		mutationFn: (auth: IAuthorizationForm) => AuthorizationFormApi(auth),
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

	const onSubmit: SubmitHandler<IAuthorizationForm> = data => {
		handlerAuthorizationApi(data);
	};

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		isSuccess,
		messageError,
		setIsSuccess,
		setMessageError,
		isError,
	};
};
