import { IUser } from "@/types/user.type";
import axios from "axios";

export const getBookingProfileApi = async (user: IUser | null) => {
	try {
		return await axios.get(`http://localhost:3000/api/booking/${user?.id}`);
	} catch (error) {
		console.log(error);
		return null;
	}
};
