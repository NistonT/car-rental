import { IVehicle } from "@/modules/VehiclePanel/types/vehicle.type";

type Props = {
	vehicles: {
		[key: string]: IVehicle | null;
	};
	vehicle_id: string | null;
};

export const VehicleYear = ({ vehicles, vehicle_id }: Props) => {
	if (!vehicle_id) {
		return <p className='text-gray-400'>ID автомобиля не указан</p>;
	}

	const vehicle = vehicles[vehicle_id];

	if (!vehicle) {
		return <p className='text-gray-400'>Загрузка...</p>;
	}

	if (!vehicle.year) {
		return <p className='text-gray-400'>Год автомобиля не указан</p>;
	}

	return (
		<>
			<p className='text-white'>
				Год автомобиля:{" "}
				<span className='text-gray-300 font-bold text-2xl'>{vehicle.year}</span>
			</p>
		</>
	);
};
