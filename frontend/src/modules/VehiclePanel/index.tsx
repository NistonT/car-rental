"use client";
import { authAtom } from "@/app/jotai/auth.store";
import { IUser } from "@/types/user.type";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { checkTokenVehicleApi } from "./api/checkToken.api";
import { getAllVehicle } from "./api/getAllVehicle";
import { getUser } from "./api/getUser.api";
import { FilterMake } from "./components/FilterMake";
import { FilterType } from "./components/FilterType";
import { FilterYear } from "./components/FilterYear";
import { IsModal } from "./components/IsModal";
import { SearchQuery } from "./components/SearchQuery";
import { VehiclesList } from "./components/VehiclesList";
import { useModalDate } from "./hooks/useModalDate";
import { useSearchQuery } from "./hooks/useSearchQuery";
import { IVehicle } from "./types/vehicle.type";

export const VehiclePanel = () => {
	const router = useRouter();
	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [isAuth, setIsAuth] = useAtom<boolean>(authAtom);
	const [vehicles, setVehicles] = useState<IVehicle[]>([]);

	const {
		filteredVehicles,
		searchQuery,
		filterType,
		filterMake,
		filterYear,
		setSearchQuery,
		setFilterMake,
		setFilterType,
		setFilterYear,
	} = useSearchQuery(vehicles);

	const {
		isModalOpen,
		selectedVehicle,
		formatDate,
		startDate,
		setStartDate,
		endDate,
		handleEndDateChange,
		error,
		success,
		handleCloseModal,
		handleRent,
		handleOpenModal,
	} = useModalDate();

	useEffect(() => {
		const token = Cookies.get("token");

		if (!token) {
			console.log("У вас нет токена");
			router.push("/authorization");
			return;
		}

		checkTokenVehicleApi(token)
			.then(response => {
				if (!response || !response.data || !response.data.sub) {
					console.error("Invalid response from checkTokenProfileApi", response);
					setLoading(false);
					router.push("/authorization");
					return;
				}
				getUser(response.data.sub)
					.then(userResponse => {
						setUser(userResponse?.data);
						setIsAuth(true);
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

		getAllVehicle()
			.then(response => {
				console.log(response?.data);
				setVehicles(response?.data);
			})
			.catch(error => {
				console.error("Error fetching vehicles:", error);
			});
	}, [router, setIsAuth]);
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
							<div className='flex flex-wrap gap-2 mb-4'>
								<SearchQuery
									searchQuery={searchQuery}
									setSearchQuery={setSearchQuery}
								/>
								<FilterType
									filterType={filterType}
									setFilterType={setFilterType}
								/>
								<FilterMake
									filterMake={filterMake}
									setFilterMake={setFilterMake}
									vehicles={vehicles}
								/>
								<FilterYear
									filterYear={filterYear}
									setFilterYear={setFilterYear}
									vehicles={vehicles}
								/>
							</div>
							<VehiclesList
								vehicles={vehicles}
								handleOpenModal={handleOpenModal}
								filteredVehicles={filteredVehicles}
							/>
						</>
					)}
				</div>
				<IsModal
					isModalOpen={isModalOpen}
					selectedVehicle={selectedVehicle}
					formatDate={formatDate}
					startDate={startDate}
					setStartDate={setStartDate}
					endDate={endDate}
					handleEndDateChange={handleEndDateChange}
					error={error}
					success={success}
					handleCloseModal={handleCloseModal}
					handleRent={handleRent}
				/>
			</section>
		</>
	);
};
