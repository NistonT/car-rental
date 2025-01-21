import { useState } from "react";
import { IVehicle } from "../types/vehicle.type";

export const useSearchQuery = (vehicles: IVehicle[]) => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [filterType, setFilterType] = useState<string>("");
	const [filterMake, setFilterMake] = useState<string>("");
	const [filterYear, setFilterYear] = useState<string>("");

	const filterQuery = (
		vehicles: IVehicle[],
		searchQuery: string,
		filterType: string,
		filterMake: string,
		filterYear: string
	): IVehicle[] => {
		const lowercasedSearchQuery = searchQuery.toLowerCase();

		return vehicles.filter(vehicle => {
			const matchesSearch =
				!searchQuery ||
				vehicle.make.toLowerCase().includes(lowercasedSearchQuery) ||
				vehicle.type.toLowerCase().includes(lowercasedSearchQuery) ||
				String(vehicle.year).toLowerCase().includes(lowercasedSearchQuery);

			const matchesType = !filterType || vehicle.type === filterType;

			const matchesMake = !filterMake || vehicle.make === filterMake;

			const matchesYear = !filterYear || String(vehicle.year) === filterYear;

			return matchesSearch && matchesType && matchesMake && matchesYear;
		});
	};

	const filteredVehicles = filterQuery(
		vehicles,
		searchQuery,
		filterType,
		filterMake,
		filterYear
	);

	return {
		filteredVehicles,
		vehicles,
		searchQuery,
		filterType,
		filterMake,
		filterYear,
		setSearchQuery,
		setFilterMake,
		setFilterType,
		setFilterYear,
	};
};
