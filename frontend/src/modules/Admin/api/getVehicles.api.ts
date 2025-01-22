import axios from "axios";

export const getVehiclesApi = async () => {
	try {
		return await axios.get(`http://localhost:3000/api/vehicle`);
	} catch (error) {
		console.log(error);
		return null;
	}
};
