import { useEffect, useState } from "react";
import { BookedVehiclesApi } from "../api/bookedVehicles.api";
import { IVehicle } from "../types/vehicle.type";
import { FilteredVehiclesMap } from "./FilteredVehiclesMap";

type Props = {
	filteredVehicles: IVehicle[];
	handleOpenModal: (vehicle: IVehicle) => void;
	vehicles: IVehicle[];
};

export const VehiclesList = ({
	vehicles,
	filteredVehicles,
	handleOpenModal,
}: Props) => {
	const [bookedVehicleIds, setBookedVehicleIds] = useState<string[]>([]);

	useEffect(() => {
		BookedVehiclesApi(setBookedVehicleIds).then(response => {
			console.log(response);
		});
	}, []);

	return (
		<div>
			<FilteredVehiclesMap
				filteredVehicles={filteredVehicles}
				handleOpenModal={handleOpenModal}
				bookedVehicleIds={bookedVehicleIds}
			/>
		</div>
	);
};
