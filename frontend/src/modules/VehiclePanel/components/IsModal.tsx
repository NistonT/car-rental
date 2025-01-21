import { SetStateAction } from "react";
import { IVehicle } from "../types/vehicle.type";

type Props = {
	isModalOpen: boolean;
	selectedVehicle: IVehicle | null;
	formatDate: (date: Date | null) => string;
	startDate: Date | null;
	setStartDate: (value: SetStateAction<Date | null>) => void;
	endDate: Date | null;
	handleEndDateChange: (date: Date) => void;
	error: string | null;
	success: string | null;
	handleCloseModal: () => void;
	handleRent: () => void;
};

export const IsModal = ({
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
}: Props) => {
	return (
		<>
			{isModalOpen && (
				<div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
					<div className='bg-gray-800 p-6 rounded-md shadow-lg w-96'>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Запись на прокат {selectedVehicle?.make}
						</h2>
						<div className='mb-4'>
							<label className='block text-gray-400 text-sm mb-2'>
								Дата начала:
							</label>
							<input
								type='date'
								value={formatDate(startDate)}
								onChange={e => setStartDate(new Date(e.target.value))}
								className='w-full bg-gray-700 text-white border border-gray-600 p-2 rounded-md'
								min={formatDate(new Date())}
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-400 text-sm mb-2'>
								Дата конца:
							</label>
							<input
								type='date'
								value={formatDate(endDate)}
								onChange={e => handleEndDateChange(new Date(e.target.value))}
								className='w-full bg-gray-700 text-white border border-gray-600 p-2 rounded-md'
								min={formatDate(startDate || new Date())}
							/>
						</div>
						{error && <p className='text-red-500 mb-2'>{error}</p>}
						{success && <p className='text-green-500 mb-2'>{success}</p>}
						<div className='flex justify-end'>
							<button
								onClick={handleCloseModal}
								className='mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'
							>
								Отмена
							</button>
							<button
								onClick={handleRent}
								className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
							>
								Записать на прокат
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
