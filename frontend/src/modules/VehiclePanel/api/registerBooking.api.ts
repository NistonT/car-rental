import axios from "axios";
import { IBooking } from "../types/booking.type";

export const registerBookingApi = async (data: IBooking) => {
	try {
		return await axios.post(`http://localhost:3000/api/booking`, data);
	} catch (error) {
		console.log(error);
		return null;
	}
};
