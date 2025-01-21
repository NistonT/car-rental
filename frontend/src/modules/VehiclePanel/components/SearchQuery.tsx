import { SetStateAction } from "react";

type Props = {
	searchQuery: string;
	setSearchQuery: (value: SetStateAction<string>) => void;
};

export const SearchQuery = ({ searchQuery, setSearchQuery }: Props) => {
	return (
		<>
			<input
				type='text'
				placeholder='Поиск...'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				className='block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
			/>
		</>
	);
};
