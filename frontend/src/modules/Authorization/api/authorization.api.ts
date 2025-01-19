import { IToken } from "@/types/token.type";
import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { IAuthorizationForm } from "../types/auth.type";

export const AuthorizationFormApi = async (
	data: IAuthorizationForm
): Promise<AxiosResponse<IToken>> => {
	try {
		const response = await axios.post(
			`http://localhost:3000/api/auth/login`,
			data
		);

		console.log(response, response.data.access_token);

		Cookies.set("token", response.data.access_token, {
			path: "/",
			expires: 1,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
		});

		return response;
	} catch (error) {
		console.log(error);
		throw error as AxiosError;
	}
};
