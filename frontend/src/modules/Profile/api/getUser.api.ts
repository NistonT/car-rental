import axios from "axios";

export const getUser = async (id: string) => {
	try {
		return await axios.get(`http://localhost:3000/api/user/${id}`);
	} catch (error) {
		console.log(error);
		return null;
	}
};
