export interface IVehicle {
	id?: string;
	type: string;
	make: string;
	year: number;
	description: string;
	CreatedAt?: Date;
	UpdatedAt?: Date;
	Booking?: [];
}
