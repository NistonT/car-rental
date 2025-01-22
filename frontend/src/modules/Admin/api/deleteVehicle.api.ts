import axios from "axios";

export const deleteVehicleApi = async (id: string) => {
	try {
		return await axios.delete(`http://localhost:3000/api/vehicle/${id}`);
	} catch (error) {
		console.log(error);
		return null;
	}
};
