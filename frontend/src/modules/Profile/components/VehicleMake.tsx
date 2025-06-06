import { IVehicle } from "@/modules/VehiclePanel/types/vehicle.type";

type Props = {
	vehicles: {
		[key: string]: IVehicle | null;
	};
	vehicle_id: string | undefined;
};

export const VehicleMake = ({ vehicles, vehicle_id }: Props) => {
	console.log(vehicles, vehicle_id);
	if (!vehicle_id) {
		return <p className='text-gray-400'>ID автомобиля не указан</p>;
	}
	const vehicle = vehicles[vehicle_id];

	return (
		<>
			{vehicle?.make ? (
				<p className='text-white'>
					Автомобиль: <span className='text-gray-300'>{vehicle.make}</span>
				</p>
			) : (
				<p className='text-gray-400'>Загрузка...</p>
			)}
		</>
	);
};
