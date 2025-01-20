import axios from "axios";
import { ILicense } from "../types/license.type";

export const addLicenseUserApi = async (
	id: string | undefined | null,
	license: ILicense
) => {
	try {
		return await axios.post(`http://localhost:3000/api/license/${id}`, license);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error("Axios Error:", error);
			return error;
		} else {
			console.error("Unexpected Error:", error);
			return new Error("Unexpected Error", { cause: error });
		}
	}
};
