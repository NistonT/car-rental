"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { postVehicleApi } from "../api/postVehicle.api";
import { IPostVehicle } from "../types/postVehicle.type";

export const AddVehicle = () => {
	const { register, handleSubmit, reset } = useForm<IPostVehicle>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const handlerCloseModal = () => {
		setIsSuccess(false);
	};

	const onSubmit: SubmitHandler<IPostVehicle> = data => {
		setIsSuccess(false);

		const data_success = { ...data, year: Number(data.year) };

		postVehicleApi(data_success).then(response => {
			console.log(response);
			setIsSuccess(true);
		});
		reset();
	};

	return (
		<>
			<div className='p-4 md:w-1/3'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className=' bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'
				>
					<h2 className='text-white text-lg font-medium title-font mb-5'>
						Добавление автотранспорта
					</h2>
					<div className='relative mb-4'>
						<label htmlFor='type' className='leading-7 text-sm text-gray-400'>
							Тип автомобиля
						</label>
						<input
							{...register("type", { required: true })}
							type='text'
							id='type'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='make' className='leading-7 text-sm text-gray-400'>
							Марка автомобиля
						</label>
						<input
							{...register("make", { required: true })}
							type='text'
							id='make'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='year' className='leading-7 text-sm text-gray-400'>
							Год автомобиля
						</label>
						<input
							{...register("year", { required: true })}
							type='number'
							id='year'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='description'
							className='leading-7 text-sm text-gray-400'
						>
							Описание
						</label>

						<textarea
							{...register("description", { required: true })}
							id='description'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none'
						></textarea>
					</div>
					<button className='text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg'>
						Добавить
					</button>
					{isSuccess && (
						<div
							onClick={handlerCloseModal}
							className='flex items-center justify-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'
						>
							<div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md'>
								<div className='flex items-center justify-center mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-12 w-12 text-green-500'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<p className='text-center text-gray-800 text-lg font-semibold mb-4'>
									Автотранспорт успешно добавлен
								</p>
							</div>
						</div>
					)}
				</form>
			</div>
		</>
	);
};
