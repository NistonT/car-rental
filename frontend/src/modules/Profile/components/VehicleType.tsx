import { IVehicle } from "@/modules/VehiclePanel/types/vehicle.type";

type Props = {
	vehicles: {
		[key: string]: IVehicle | null;
	};
	vehicle_id: string | null;
};

export const VehicleType = ({ vehicles, vehicle_id }: Props) => {
	if (!vehicle_id) {
		return <p className='text-gray-400'>ID автомобиля не указан</p>;
	}

	const vehicle = vehicles[vehicle_id];

	return (
		<>
			{vehicles?.type ? (
				<p className='text-white'>
					Тип автомобиля:{" "}
					<span className='text-gray-300 font-bold text-2xl'>
						{vehicle?.type}
					</span>
				</p>
			) : (
				<p className='text-gray-400'>Загрузка...</p>
			)}
		</>
	);
};
