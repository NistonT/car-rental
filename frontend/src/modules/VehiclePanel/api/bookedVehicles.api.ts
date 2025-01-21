import axios from "axios";

export const BookedVehiclesApi = async (
	setBookedVehicleIds: (ids: string[]) => void
) => {
	try {
		const response = await axios.get(`http://localhost:3000/api/booking`);

		if (response.status === 200) {
			const booked = response.data;
			setBookedVehicleIds(booked.map((item: any) => item.vehicle_id));
		}
	} catch (error) {
		console.error("Error fetching booked vehicles:", error);
	}
};
