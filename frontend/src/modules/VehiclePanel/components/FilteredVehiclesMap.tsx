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
	const filteredAndAvailableVehicles = filteredVehicles.filter(
		vehicle => !bookedVehicleIds.includes(vehicle.id)
	);
	return (
		<>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredAndAvailableVehicles.length > 0 ? (
					filteredAndAvailableVehicles.map(vehicle => (
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
		</>
	);
};
