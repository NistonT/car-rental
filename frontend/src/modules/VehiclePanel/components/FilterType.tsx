import { SetStateAction } from "react";
import { typeArray } from "../constants";

type Props = {
	filterType: string;
	setFilterType: (value: SetStateAction<string>) => void;
};

export const FilterType = ({ filterType, setFilterType }: Props) => {
	return (
		<>
			<select
				value={filterType}
				onChange={e => setFilterType(e.target.value)}
				className='block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
			>
				{typeArray.map(type => (
					<option value={type.value}>{type.name}</option>
				))}
			</select>
		</>
	);
};
