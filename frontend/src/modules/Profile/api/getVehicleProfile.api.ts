import axios from "axios";

export const getVehicleProfileApi = (id: string) => {
	try {
		return axios.get(`http://localhost:3000/api/vehicle/${id}`);
	} catch (error) {
		console.log(error);
		return null;
	}
};
