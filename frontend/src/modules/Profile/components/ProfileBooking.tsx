import { IVehicle } from "@/modules/VehiclePanel/types/vehicle.type";
import { IBookingUser } from "@/types/booking.type";
import { IUser } from "@/types/user.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getBookingProfileApi } from "../api/getBookingProfile.api";
import { getVehicleProfileApi } from "../api/getVehicleProfile.api";
import { VehicleDescription } from "./VehicleDescription";
import { VehicleMake } from "./VehicleMake";
import { VehicleType } from "./VehicleType";
import { VehicleYear } from "./VehicleYear";

type Props = {
	user: IUser | null;
};

export const ProfileBooking = ({ user }: Props) => {
	const [booking, setBooking] = useState<IBookingUser[]>([]);
	const [vehicles, setVehicles] = useState<{ [key: string]: IVehicle | null }>(
		{}
	);

	const formatData = (date: string | Date | undefined) => {
		if (!date) return { date: "Не указана", status: "past" };

		const dateObj = typeof date === "string" ? new Date(date) : date;

		if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
			return { date: "Неверная дата", status: "past" };
		}

		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const dateWithoutTime = new Date(dateObj);
		dateWithoutTime.setHours(0, 0, 0, 0);

		if (dateWithoutTime < today) {
			return {
				date: dateObj.toLocaleDateString("ru-RU", {
					day: "numeric",
					month: "long",
					year: "numeric",
				}),
				status: "past",
			};
		} else if (dateWithoutTime.getTime() === today.getTime()) {
			return {
				date: dateObj.toLocaleDateString("ru-RU", {
					day: "numeric",
					month: "long",
					year: "numeric",
				}),
				status: "today",
			};
		} else {
			return {
				date: dateObj.toLocaleDateString("ru-RU", {
					day: "numeric",
					month: "long",
					year: "numeric",
				}),
				status: "future",
			};
		}
	};

	useEffect(() => {
		async function axiosQuery() {
			try {
				const response = await getBookingProfileApi(user);
				setBooking(response?.data || []);
				if (response?.data) {
					const vehiclePromises = response.data.map(async (book: any) => {
						try {
							const vehicle: AxiosResponse<IVehicle> | null =
								await getVehicleProfileApi(book.vehicle_id);
							if (vehicle) {
								setVehicles(prevVehicles => ({
									...prevVehicles,
									[book.vehicle_id]: vehicle.data || null,
								}));
							}
						} catch (e) {
							console.log("Error get vehicle", e);
						}
					});
					await Promise.all(vehiclePromises);
				}
			} catch (error) {
				console.error("Error fetching booking:", error);
			}
		}
		axiosQuery();
	}, []);

	return (
		<>
			<div className='w-full bg-[#151b23] p-8 rounded-md overflow-auto max-h-[500px]'>
				{booking && booking.length > 0 ? (
					<ul className='space-y-4'>
						{booking.map(book => {
							const formattedDate = formatData(book.booking_date);

							if (formattedDate.status === "past") return null;

							return (
								<li
									key={book.id}
									className={`p-4 rounded-md flex justify-between items-center ${
										formattedDate.status === "today"
											? "bg-green-600 border-2 border-green-400"
											: formattedDate.status === "future"
											? "bg-gray-700"
											: "bg-gray-700"
									}`}
								>
									<div>
										<VehicleMake
											vehicles={vehicles}
											vehicle_id={book.vehicle_id}
										/>
										<VehicleType
											vehicles={vehicles}
											vehicle_id={book.vehicle_id}
										/>
										<VehicleYear
											vehicles={vehicles}
											vehicle_id={book.vehicle_id}
										/>
										<VehicleDescription
											vehicles={vehicles}
											vehicle_id={book.vehicle_id}
										/>
									</div>
									<p className='text-white'>
										Дата:{" "}
										<span className='text-gray-300'>{formattedDate.date}</span>
									</p>
								</li>
							);
						})}
					</ul>
				) : (
					<p className='text-white text-center'>Нет доступных бронирований</p>
				)}
			</div>
		</>
	);
};
