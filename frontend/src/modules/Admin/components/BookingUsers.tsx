"use client";

import { useEffect, useState } from "react";
import { deleteUser } from "../api/deleteUser.api";
import { deleteVehicleApi } from "../api/deleteVehicle.api";
import { getBookingApi } from "../api/getBooking.api";
import { getVehiclesApi } from "../api/getVehicles.api";

export const BookingUsers = () => {
	const [vehicles, setVehicles] = useState<any[] | null>(null);
	const [usersData, setUsersData] = useState<any[] | null>(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [vehiclesPerPage] = useState(6);

	useEffect(() => {
		const fetchAllData = async () => {
			try {
				const usersResponse = await getBookingApi();
				if (usersResponse) {
					setUsersData(usersResponse);
				}
				const vehiclesResponse = await getVehiclesApi();
				setVehicles(vehiclesResponse?.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchAllData();
	}, []);

	const handlerDeleteBooking = async (bookingId: string) => {
		try {
			await deleteUser(bookingId);

			const usersResponse = await getBookingApi();
			if (usersResponse) {
				setUsersData(usersResponse);
			}
		} catch (error: any) {
			console.error("Error deleting booking:", error);
		}
	};

	const handleDeleteVehicle = async (vehicleId: string) => {
		try {
			await deleteVehicleApi(vehicleId);

			const vehiclesResponse = await getVehiclesApi();
			setVehicles(vehiclesResponse?.data);
		} catch (error: any) {
			console.error("Error deleting vehicle:", error);
		}
	};

	const indexOfLastVehicle = currentPage * vehiclesPerPage;
	const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
	const currentVehicles = vehicles?.slice(
		indexOfFirstVehicle,
		indexOfLastVehicle
	);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const pageNumbers = vehicles
		? Array.from(
				{ length: Math.ceil(vehicles.length / vehiclesPerPage) },
				(_, i) => i + 1
		  )
		: [];

	return (
		<>
			<div className='flex flex-wrap -m-4 w-2/3'>
				{usersData?.map(user => (
					<div key={user.id} className='p-4 w-full'>
						<div className='h-full border-2 border-gray-800 rounded-lg overflow-hidden'>
							<div className='p-6 flex'>
								<div className='flex flex-col w-1/3'>
									{user.avatar && (
										<div className='mb-4 flex justify-center items-center'>
											<img
												className='h-24 w-24 rounded-full object-cover'
												src={user.avatar}
												alt={`${user.name} Avatar`}
											/>
										</div>
									)}
									<h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>
										{user.surname} {user.name} {user.patronymic}
									</h2>
									<h1 className='title-font text-lg font-medium text-white mb-3'>
										Логин: {user.login}
									</h1>
									<h1 className='title-font text-lg font-medium text-white mb-3'>
										Лицензия: {user.license}
									</h1>
									<button
										onClick={() => handlerDeleteBooking(user.id)}
										className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
									>
										Удалить
									</button>
								</div>
								<ul className='mb-3 w-2/3 max-h-64 overflow-y-auto'>
									{user.bookings.map((booking: any) => (
										<li
											key={booking.id}
											className='mb-2 bg-gray-800 p-4 rounded-md flex justify-between items-center'
										>
											<div>
												<p className='leading-relaxed text-white'>
													Дата бронирования:{" "}
													<span className='text-gray-300'>
														{new Date(
															booking.booking_date
														).toLocaleDateString()}
													</span>
												</p>
												<p className='leading-relaxed text-white'>
													Продолжительность бронирования:{" "}
													<span className='text-gray-300'>
														{booking.duration}
													</span>
												</p>
												{booking.vehicle && (
													<p className='leading-relaxed text-white'>
														Автомобиль:{" "}
														<span className='text-gray-300'>
															{booking.vehicle.make} ({booking.vehicle.type})
														</span>
													</p>
												)}
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
				<div className='flex flex-wrap -m-4 w-full p-4'>
					{currentVehicles?.map(vehicle => (
						<div key={vehicle.id} className='p-4 w-full md:w-1/2 lg:w-1/3'>
							<div className='h-full border-2 border-gray-800 rounded-lg overflow-hidden'>
								<div className='p-6'>
									<h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>
										{vehicle.type}
									</h2>
									<h1 className='title-font text-lg font-medium text-white mb-3'>
										{vehicle.make}
									</h1>
									<p className='leading-relaxed mb-3 text-white'>
										{vehicle.description}
									</p>
									<p className='leading-relaxed mb-3 text-white'>
										Год: {vehicle.year}
									</p>
									<div className='flex justify-between items-center'>
										<button
											onClick={() => handleDeleteVehicle(vehicle.id)}
											className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
										>
											Удалить
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='flex justify-center mt-4'>
					{pageNumbers.map(number => (
						<button
							key={number}
							onClick={() => paginate(number)}
							className={`mx-1 px-3 py-1 rounded ${
								currentPage === number
									? "bg-green-500 text-white"
									: "bg-gray-700 hover:bg-gray-600 text-white"
							}`}
						>
							{number}
						</button>
					))}
				</div>
			</div>
		</>
	);
};
