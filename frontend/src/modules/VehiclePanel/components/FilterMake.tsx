import { SetStateAction } from "react";
import { IVehicle } from "../types/vehicle.type";

type Props = {
	filterMake: string;
	setFilterMake: (value: SetStateAction<string>) => void;
	vehicles: IVehicle[];
};

export const FilterMake = ({ filterMake, setFilterMake, vehicles }: Props) => {
	return (
		<>
			<select
				value={filterMake}
				onChange={e => setFilterMake(e.target.value)}
				className='block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
			>
				<option value=''>Все марки</option>
				{Array.from(new Set(vehicles.map(vehicle => vehicle.make))).map(
					make => (
						<option key={make} value={make}>
							{make}
						</option>
					)
				)}
			</select>
		</>
	);
};
