import Link from "next/link";

export const FormIsSuccess = () => {
	return (
		<div className='flex justify-center text-center w-full mt-4 mb-4 flex-col transition-all'>
			<div className='flex items-center bg-green-100 text-green-800 rounded-md p-4 mb-4'>
				<svg
					className='w-5 h-5 mr-2'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M5 13l4 4L19 7'
					/>
				</svg>
				<span>Вы успешно зарегистрировались</span>
			</div>
			<div className='w-full mb-4 mt-4'>
				<Link
					href='/authorization'
					className='inline-flex items-center text-green-500 hover:text-green-600 transition-colors duration-200'
				>
					<span className='mr-1'>Перейти на страницу авторизации</span>
					<svg
						className='w-4 h-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};
