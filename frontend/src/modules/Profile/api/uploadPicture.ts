import axios from "axios";

export const uploadPictureApi = async (id: string | undefined, file: File) => {
	try {
		const formData = new FormData();
		formData.append("image", file);
		return await axios.post(
			`http://localhost:3000/api/upload-file/${id}`,
			formData
		);
	} catch (error) {
		console.log(error);
	}
};
