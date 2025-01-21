import { SetStateAction } from "react";
import { IVehicle } from "../types/vehicle.type";

type Props = {
	filterYear: string;
	setFilterYear: (value: SetStateAction<string>) => void;
	vehicles: IVehicle[];
};

export const FilterYear = ({ filterYear, setFilterYear, vehicles }: Props) => {
	return (
		<select
			value={filterYear}
			onChange={e => setFilterYear(e.target.value)}
			className='block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		>
			<option value=''>Все года</option>
			{Array.from(new Set(vehicles.map(vehicle => vehicle.year))).map(year => (
				<option key={year} value={String(year)}>
					{year}
				</option>
			))}
		</select>
	);
};
