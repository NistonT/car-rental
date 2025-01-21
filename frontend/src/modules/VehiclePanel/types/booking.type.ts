export interface IBooking {
	user_id: string | undefined;
	vehicle_id: string | undefined;
	date: Date | undefined | string;
	duration: number;
}
