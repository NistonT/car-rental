import { useState } from "react";
import { IVehicle } from "../types/vehicle.type";

type Props = {
	filteredVehicles: IVehicle[];
	handleOpenModal: (vehicle: IVehicle) => void;
	bookedVehicleIds: any;
};

export const FilteredVehiclesMap = ({
	filteredVehicles,
	handleOpenModal,
	bookedVehicleIds,
}: Props) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(6);

	const availableVehicles = filteredVehicles.filter(
		vehicle => !bookedVehicleIds.includes(vehicle.id)
	);

	const totalPages = Math.ceil(availableVehicles.length / pageSize);

	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const vehiclesOnPage = availableVehicles.slice(startIndex, endIndex);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{vehiclesOnPage.length > 0 ? (
					vehiclesOnPage.map(vehicle => (
						<div
							key={vehicle.id}
							className='w-full bg-gray-800 p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4'
						>
							<div className='flex justify-between items-center'>
								<div>
									<h2 className='text-white font-semibold text-lg mb-1'>
										{vehicle.make}
									</h2>
									<p className='text-gray-400 text-sm'>{vehicle.type}</p>
								</div>
								<p className='text-gray-400 text-sm'>{vehicle.year}</p>
							</div>
							<p className='text-gray-400 text-sm mt-2'>
								{vehicle.description}
							</p>
							<button
								onClick={() => handleOpenModal(vehicle)}
								className='mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
							>
								Записаться на прокат
							</button>
						</div>
					))
				) : (
					<div className='flex items-center justify-center w-full h-full col-span-3'>
						<p className='text-gray-400 text-2xl text-center'>
							Транспорт не найден или закончился.
						</p>
					</div>
				)}
			</div>

			{totalPages > 1 && (
				<div className='flex justify-center mt-6 space-x-2'>
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className='px-3 py-1 rounded-md focus:outline-none transition-colors duration-200 bg-gray-700 hover:bg-gray-600 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						Назад
					</button>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
						<button
							key={page}
							onClick={() => handlePageChange(page)}
							className={`px-3 py-1 rounded-md focus:outline-none transition-colors duration-200 ${
								currentPage === page
									? "bg-green-600 text-white"
									: "bg-gray-700 hover:bg-gray-600 text-gray-300"
							}`}
						>
							{page}
						</button>
					))}

					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className='px-3 py-1 rounded-md focus:outline-none transition-colors duration-200 bg-gray-700 hover:bg-gray-600 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						Вперед
					</button>
				</div>
			)}
		</>
	);
};
