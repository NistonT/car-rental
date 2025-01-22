import axios from "axios";
import { IPostVehicle } from "../types/postVehicle.type";

export const postVehicleApi = async (data: IPostVehicle) => {
	try {
		return axios.post(`http://localhost:3000/api/vehicle`, data);
	} catch (error) {
		console.log(error);
		return null;
	}
};
