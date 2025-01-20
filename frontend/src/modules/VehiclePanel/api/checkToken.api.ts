import axios from "axios";

export const checkTokenVehicleApi = async (token: string) => {
	try {
		const response: any = await axios.get(
			`http://localhost:3000/api/auth/check`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return await response;
	} catch (error) {
		console.log(error);
		return null;
	}
};
