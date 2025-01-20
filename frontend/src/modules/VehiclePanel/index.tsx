"use client";
import { authAtom } from "@/app/jotai/auth.store";
import { IUser } from "@/types/user.type";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { checkTokenVehicleApi } from "./api/checkToken.api";
import { getAllVehicle } from "./api/getAllVehicle";
import { getUser } from "./api/getUser.api";
import { IVehicle } from "./types/vehicle.type";

export const VehiclePanel = () => {
	const router = useRouter();
	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [isAuth, setIsAuth] = useAtom<boolean>(authAtom);
	const [vehicles, setVehicles] = useState<IVehicle[]>([]);

	useEffect(() => {
		const token = Cookies.get("token");

		if (!token) {
			console.log("У вас нет токена");
			redirect("/authorization");
		}
		checkTokenVehicleApi(token)
			.then(response => {
				if (!response || !response.data || !response.data.sub) {
					console.error("Invalid response from checkTokenProfileApi", response);
					setLoading(false);
					router.push("/authorization");
				}
				getUser(response.data.sub)
					.then(userResponse => {
						setUser(userResponse?.data);
						setIsAuth(true);
						Cookies.set("isAuth", "true", { sameSite: "Strict" });
						setLoading(false);
					})
					.catch(getUserError => {
						console.error("Error in getUser", getUserError);
						setLoading(false);
						router.push("/authorization");
					});
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
				router.push("/authorization");
			});

		getAllVehicle().then(response => {
			console.log(response?.data);
			setVehicles(response?.data);
		});
	}, []);

	console.log(user);

	return (
		<>
			<section className='bg-gray-900 text-gray-300 min-h-screen py-12'>
				<div className='container mx-auto px-4'>
					{loading ? (
						<div className='flex justify-center items-center h-screen'>
							<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500'></div>
						</div>
					) : (
						<>
							<div className='text-center mb-12'>
								<h1 className='text-3xl font-bold text-white mb-4'>
									Наш транспорт
								</h1>
								<p className='text-gray-400 text-lg'>
									Здесь вы можете найти информацию о доступном транспорте.
								</p>
							</div>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
								{vehicles.map(vehicle => (
									<div
										key={vehicle.id}
										className='bg-gray-800 p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300'
									>
										<div className='flex flex-col items-center'>
											<div className='w-28 h-28 mb-4 overflow-hidden rounded-full'>
												<img
													alt={vehicle.make}
													className='object-cover w-full h-full'
													src='https://dummyimage.com/200x200' // Замените на реальное изображение
												/>
											</div>
											<div className='text-center'>
												<h2 className='text-white font-semibold text-xl mb-2'>
													{vehicle?.make}
												</h2>
												<p className='text-gray-400 text-base mb-2'>
													{vehicle.type}
												</p>
												<p className='text-gray-400 text-sm'>
													<strong>Год выпуска:</strong> {vehicle.year}
												</p>
												<p className='text-gray-400 text-sm mt-2'>
													<strong>Описание:</strong> {vehicle.description}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</section>
		</>
	);
};
