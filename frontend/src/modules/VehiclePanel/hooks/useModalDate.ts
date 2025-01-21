import { useState } from "react";
import { IVehicle } from "../types/vehicle.type";

export const useModalDate = () => {
	const [selectedVehicle, setSelectedVehicle] = useState<IVehicle | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const handleOpenModal = (vehicle: IVehicle) => {
		setSelectedVehicle(vehicle);
		setIsModalOpen(true);
		setError(null);
		setSuccess(null);
		setStartDate(new Date());
		setEndDate(new Date(new Date().setDate(new Date().getDate() + 1)));
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedVehicle(null);
		setStartDate(null);
		setEndDate(null);
	};

	const handleEndDateChange = (date: Date) => {
		if (!startDate) return;

		if (date < startDate) {
			setError("Дата конца аренды должна быть позже даты начала.");
			return;
		}

		setEndDate(date);
	};

	const handleRent = () => {
		if (!selectedVehicle || !startDate || !endDate) {
			setError("Пожалуйста, выберите даты начала и конца аренды.");
			return;
		}

		if (endDate < startDate) {
			setError("Дата конца аренды должна быть позже даты начала.");
			return;
		}

		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		console.log("Vehicle:", selectedVehicle);
		console.log("Start Date:", startDate.toISOString());
		console.log("End Date:", endDate.toISOString());
		console.log("Duration:", diffDays);
		setSuccess("Аренда успешно оформлена!");
		setTimeout(() => {
			handleCloseModal();
		}, 2000);
	};

	const formatDate = (date: Date | null): string => {
		if (!date) return "";
		return date.toISOString().split("T")[0];
	};

	return {
		isModalOpen,
		selectedVehicle,
		formatDate,
		startDate,
		setStartDate,
		endDate,
		handleEndDateChange,
		error,
		success,
		handleCloseModal,
		handleRent,
		handleOpenModal,
	};
};
