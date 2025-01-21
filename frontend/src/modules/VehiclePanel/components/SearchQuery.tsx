"use client";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { IVehicle } from "../types/vehicle.type";

type Props = {
	searchQuery: string;
	setSearchQuery: (value: SetStateAction<string>) => void;
	vehicles: IVehicle[];
};

export const SearchQuery = ({
	searchQuery,
	setSearchQuery,
	vehicles,
}: Props) => {
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (searchQuery && isFocused) {
			const lowercasedQuery = searchQuery.toLowerCase();
			const filteredSuggestions = Array.from(
				new Set(
					vehicles.reduce((acc: string[], vehicle) => {
						if (vehicle.make.toLowerCase().includes(lowercasedQuery)) {
							acc.push(vehicle.make);
						}
						if (vehicle.type.toLowerCase().includes(lowercasedQuery)) {
							acc.push(vehicle.type);
						}
						if (String(vehicle.year).toLowerCase().includes(lowercasedQuery)) {
							acc.push(String(vehicle.year));
						}
						return acc;
					}, [])
				)
			).sort();

			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	}, [searchQuery, vehicles, isFocused]);

	const handleSuggestionClick = (suggestion: string) => {
		setSearchQuery(suggestion);
		setSuggestions([]);
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<>
			<div className='relative w-full'>
				<input
					ref={inputRef}
					type='text'
					placeholder='Поиск...'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setTimeout(() => setIsFocused(false), 200)}
					className='block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
				/>
				{suggestions.length > 0 && isFocused && (
					<ul className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-[200px] overflow-auto'>
						{suggestions.map((suggestion, index) => (
							<li
								key={index}
								className='px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
								onMouseDown={() => handleSuggestionClick(suggestion)}
							>
								{suggestion}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
