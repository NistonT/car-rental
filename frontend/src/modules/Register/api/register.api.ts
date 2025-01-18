import { IUser } from "@/types/user.type";
import axios, { AxiosError } from "axios";
import { IRegisterData } from "../types/data.type";

export const RegisterFormApi = async (data: IRegisterData): Promise<IUser> => {
	try {
		return await axios.post(`http://localhost:3000/api/auth/register`, data);
	} catch (error) {
		console.log(error);
		throw error as AxiosError;
	}
};
