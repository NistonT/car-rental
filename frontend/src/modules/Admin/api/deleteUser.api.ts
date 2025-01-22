import axios from "axios";

export const deleteUser = async (id: string) => {
	try {
		return await axios.delete(`http://localhost:3000/api/user/${id}`);
	} catch (error) {
		console.log(error);
		return null;
	}
};
