import { IVehicle } from "@/modules/VehiclePanel/types/vehicle.type";
import { IBookingUser } from "@/types/booking.type";
import { IUser } from "@/types/user.type";
import axios from "axios";

export const getBookingApi = async () => {
	try {
		const usersResponse = await axios.get(`http://localhost:3000/api/user`);
		const vehiclesResponse = await axios.get(
			`http://localhost:3000/api/vehicle`
		);
		const bookingResponse = await axios.get(
			`http://localhost:3000/api/booking`
		);

		const users = usersResponse.data;
		const vehicles = vehiclesResponse.data;
		const booking = bookingResponse.data;

		const vehiclesMap = vehicles.reduce(
			(acc: { [key: string]: IVehicle }, vehicle: any) => {
				acc[vehicle.id] = vehicle;
				return acc;
			},
			{}
		);

		const usersWithBookings = users.map((user: IUser) => {
			const userBookings = booking.filter(
				(book: IBookingUser) => book.user_id === user.id
			);
			const bookingsWithVehicles = userBookings.map((book: IBookingUser) => ({
				...book,
				vehicle: vehiclesMap[book.vehicle_id] || null,
			}));

			return {
				...user,
				bookings: bookingsWithVehicles,
			};
		});

		return usersWithBookings;
	} catch (error) {
		console.log(error);
		return null;
	}
};
